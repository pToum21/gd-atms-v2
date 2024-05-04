const { User, Review } = require('../models')

const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        // add query for getting all users
    },

    Mutation: {
        createUser: async (parent, { email, password, username }) => {
            try {
                const user = await User.create({ email, password, username });
                const token = signToken(user);

                return { user, token };

            } catch (error) {
                if (error.code === 11000) {
                    // Duplicate key error
                    throw new Error('Email or username already exists', 'DUPLICATE_USER');
                } else {
                    // Other errors
                    console.log(error);
                    throw new ApolloError('Error creating user', 'UNKNOWN_ERROR');
                }
            }
        },

        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }
            const correctPw = await user.isCorrectPassword(password);
            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }
            const token = signToken(user);
            return { token, user };
        },

        // addreview is broken
        addReview: async (parent, { reviewText, userId }, context) => {
            try {
                // Check if the user is authenticated
                if (!context.user) {
                    throw new AuthenticationError('You need to be logged in to add a review');
                }

                // Find the user who is creating the review
                const user = await User.findById(userId);
                if (!user) {
                    throw new Error(`User not found for ID: ${userId}`);
                }

                // Create the review and associate it with the user
                const review = await Review.create({
                    reviewText,
                    username: user.username, // Set the username from the user object
                    user: userId // Associate the review with the user
                });

                return review;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to add review');
            }
        }

    }

};
module.exports = resolvers;