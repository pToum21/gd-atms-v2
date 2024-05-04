const { User, Review } = require('../models')

const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        reviews: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Review.find(params).sort({ createdAt: -1 });
        },
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

        addReview: async (parent, { reviewText }, context) => {
            try {
                // Check if the user is authenticated
                if (!context.user) {
                    throw new AuthenticationError('You need to be logged in to add a review');
                }

                // Create the review and associate it with the authenticated user
                const review = await Review.create({
                    reviewText,
                    createdAt: new Date().toISOString(),
                    user: context.user._id 
                });

                // Fetch the associated user document
                const user = await User.findById(context.user._id);

                // Return the review object with the username
                return {
                    _id: review._id,
                    reviewText: review.reviewText,
                    createdAt: review.createdAt,
                    username: user.username 
                };
            } catch (err) {
                console.error(err);
                throw new Error('Failed to add review');
            }
        }

    }

};
module.exports = resolvers;