const { User, Review } = require('../models');
const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {
    // Queries
    Query: {
        reviews: async (parent, { username }) => {
            try {
                const params = username ? { username } : {};
                const reviews = await Review.find(params).sort({ createdAt: -1 });
                const populatedReviews = await Promise.all(reviews.map(async review => {
                    const user = await User.findById(review.user);
                    if (!user) {
                        // If the user isn't found, return null
                        return null;
                    }
                    return {
                        ...review.toObject(),
                        username: user.username,
                        status: review.status
                    };
                }));
                // Filter out reviews where the user wasn't found (i.e., review is null)
                return populatedReviews.filter(review => review !== null);
            } catch (err) {
                console.error(err);
                throw new Error('Failed to fetch reviews');
            }
        },

        review: async (parent, { _id }) => {
            try {
                const review = await Review.findById(_id);
                const user = await User.findById(review.user);
                if (!user) {
                    throw new Error('User not found');
                }
                return {
                    ...review.toObject(),
                    username: user.username,
                    status: review.status
                };
            } catch (err) {
                console.error(err);
                throw new Error('Failed to fetch review');
            }
        },

        users: async () => {
            try {
                const users = await User.find();
                const populatedUsers = await Promise.all(users.map(async user => {
                    const reviews = await Review.find({ user: user._id }).sort({ createdAt: -1 });
                    return {
                        ...user.toObject(),
                        reviews: reviews.map(review => ({
                            _id: review._id,
                            reviewText: review.reviewText,
                            createdAt: review.createdAt
                        }))
                    };
                }));
                return populatedUsers;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to fetch users');
            }
        },

        user: async (parent, { username }) => {
            try {
                const user = await User.findOne({ username });
                if (!user) {
                    throw new Error('Cannot find a user with this username');
                }
                const reviews = await Review.find({ user: user._id }).sort({ createdAt: -1 });
                return {
                    ...user.toObject(),
                    reviews: reviews.map(review => ({
                        _id: review._id,
                        reviewText: review.reviewText,
                        createdAt: review.createdAt
                    }))
                };
            } catch (err) {
                console.error(err);
                throw new Error('Failed to fetch user');
            }
        },

        me: async (parent, args, context) => {
            try {
                if (!context.user) {
                    throw new Error('You need to be logged in!');
                }
                const user = await User.findById(context.user._id);
                const reviews = await Review.find({ user: context.user._id }).sort({ createdAt: -1 });
                user.reviews = reviews;
                return user;
            } catch (error) {
                console.error(error);
                throw new Error('Failed to fetch user data');
            }
        },

        myReviews: async (parent, args, context) => {
            try {
                if (!context.user) {
                    console.log('No user in context');
                    return [];
                }
                const userId = context.user._id;
                console.log(`Fetching reviews for user ID: ${userId}`);
                const reviews = await Review.find({ user: userId }).populate('user', 'username');
                console.log(`Found reviews for user ID ${userId}: ${JSON.stringify(reviews)}`);
                const populatedReviews = reviews.map(review => ({
                    _id: review._id,
                    reviewText: review.reviewText,
                    createdAt: review.createdAt,
                    username: review.user.username,
                    status: review.status,
                }));
                return populatedReviews;
            } catch (error) {
                console.error('Error fetching reviews:', error);
                return [];
            }
        },
    },

    // Mutations
    Mutation: {
        createUser: async (parent, { email, password, username }) => {
            try {
                const user = await User.create({ email, password, username });
                const token = signToken(user);
                return { user, token };
            } catch (error) {
                if (error.code === 11000) {
                    throw new Error('Email or username already exists', 'DUPLICATE_USER');
                } else {
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
                if (!context.user) {
                    throw new AuthenticationError('You need to be logged in to add a review');
                }
                const review = await Review.create({
                    reviewText,
                    createdAt: new Date().toISOString(),
                    status: 'open',
                    user: context.user._id
                });
                const user = await User.findById(context.user._id);
                return {
                    _id: review._id,
                    reviewText: review.reviewText,
                    createdAt: review.createdAt,
                    username: user.username,
                    status: review.status
                };
            } catch (err) {
                console.error(err);
                throw new Error('Failed to add review');
            }
        },

        removeReview: async (parent, { _id }, context) => {
            try {
                if (!context.user) {
                    throw new Error('You need to be logged in to remove a review');
                }
                const review = await Review.findById(_id);
                if (!review) {
                    throw new Error('Review not found');
                }
                if (review.user.toString() !== context.user._id) {
                    throw new Error('You can only remove your own reviews');
                }
                await Review.deleteOne({ _id });
                return review;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to remove review');
            }
        },

        updateReview: async (parent, { _id, reviewText }, context) => {
            try {
                if (!context.user) {
                    throw new Error('You need to be logged in to update a review');
                }
                const review = await Review.findById(_id);
                if (!review) {
                    throw new Error('Review not found');
                }
                if (review.user.toString() !== context.user._id) {
                    throw new Error('You can only update your own reviews');
                }
                const status = review.status;
                review.reviewText = reviewText;
                await review.save();
                return {
                    ...review.toObject(),
                    status
                };
            } catch (err) {
                console.error(err);
                throw new Error('Failed to update review');
            }
        },

        // ADMIN RESOLVERS
        deleteUser: async (parent, { _id }, context) => {
            try {
                if (!context.user || context.user.role !== 'admin') {
                    throw new AuthenticationError('You need to be an admin to delete users');
                }
                const user = await User.findByIdAndDelete(_id);
                if (!user) {
                    throw new Error('User not found');
                }
                await Review.deleteMany({ user: _id });
                return user;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to delete user');
            }
        },

        updateReviewStatus: async (parent, { _id, status }, context) => {
            try {
                if (!context.user || context.user.role !== 'admin') {
                    throw new AuthenticationError('You need to be an admin to update review status');
                }
                const review = await Review.findById(_id);
                if (!review) {
                    throw new Error('Review not found');
                }
                review.status = status;
                await review.save();
                return review;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to update review status');
            }
        },
    },
};

module.exports = resolvers;
