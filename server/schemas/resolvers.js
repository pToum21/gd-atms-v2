const { User, Review } = require('../models')

const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {

    Query: {
        // add query for getting all users
    },

    Mutation: {
        addUser: async (parent, { username, email, password }) => {
            try {
                const user = await User.create({ username, email, password });
                const token = signToken(user);
                return { token, user };
            } catch (err) {
                console.log(err);
                throw new AuthenticationError('Something went wrong!');
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
        addReview: async (parent, { reviewText }, context) => {
            try {
                // Check if the user is authenticated
                if (!context.user) {
                    console.log('You need to be logged in to add a review');
                }

                // Find the user who is creating the review
                const user = await User.findById(context.user._id);
                if (!user) {
                    throw new Error('User not found');
                }

                // Create the review and associate it with the user
                const review = await Review.create({
                    reviewText,
                    username: user.username 
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