const { User, Review } = require('../models')

const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {

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

        addReview: async () => {

        }

    }
};
module.exports = resolvers;