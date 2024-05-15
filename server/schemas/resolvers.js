const { User, Review } = require('../models')

const { AuthenticationError, signToken } = require('../utils/auth');

const resolvers = {

    // Queries

    Query: {

        // query to get all the reviews ever made 
        reviews: async (parent, { username }) => {
            try {
                // filter reviews by username
                const params = username ? { username } : {};

                // Fetch all reviews matching the provided parameters
                const reviews = await Review.find(params).sort({ createdAt: -1 });

                // For each review, fetch the associated user document
                const populatedReviews = await Promise.all(reviews.map(async review => {
                    const user = await User.findById(review.user);
                    return {
                        ...review.toObject(),
                        username: user.username,
                        status: review.status // Populate the status field
                    };
                }));

                return populatedReviews;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to fetch reviews');
            }
        },

        // query to get a single review by the review's id
        review: async (parent, { _id }) => {
            try {
                // Find the review by ID
                const review = await Review.findById(_id);

                // Find the associated user by ID
                const user = await User.findById(review.user);

                // Return the review object with the username and status populated
                return {
                    ...review.toObject(),
                    username: user.username,
                    status: review.status // Populate the status field
                };
            } catch (err) {
                console.error(err);
                throw new Error('Failed to fetch review');
            }
        },

        users: async () => {
            try {
                // Fetch all users
                const users = await User.find();

                // For each user, populate their reviews
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
                // Find a single user by their username
                const user = await User.findOne({ username });

                // If the user isn't found, return an error message
                if (!user) {
                    throw new Error('Cannot find a user with this username');
                }

                // Populate the user's reviews
                const reviews = await Review.find({ user: user._id }).sort({ createdAt: -1 });

                // Return the user object with the reviews populated
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
                // Check if the user is authenticated
                if (!context.user) {
                    throw new Error('You need to be logged in!');
                }

                // Fetch the authenticated user
                const user = await User.findById(context.user._id);

                // Fetch the reviews associated with the user
                const reviews = await Review.find({ user: context.user._id }).sort({ createdAt: -1 });

                // Attach the reviews to the user object
                user.reviews = reviews;

                return user;
            } catch (error) {
                console.error(error);
                throw new Error('Failed to fetch user data');
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
                    status: 'open', // Set the status field to 'open'
                    user: context.user._id
                });

                // Fetch the associated user document
                const user = await User.findById(context.user._id);

                // Return the review object with the username
                return {
                    _id: review._id,
                    reviewText: review.reviewText,
                    createdAt: review.createdAt,
                    username: user.username,
                    status: review.status // Include the status field in the returned object
                };
            } catch (err) {
                console.error(err);
                throw new Error('Failed to add review');
            }
        },

        removeReview: async (parent, { _id }, context) => {
            try {
                // Check if the user is authenticated
                if (!context.user) {
                    throw new Error('You need to be logged in to remove a review');
                }

                // Find the review by ID
                const review = await Review.findById(_id);

                // Check if the review exists
                if (!review) {
                    throw new Error('Review not found');
                }

                // Check if the review belongs to the authenticated user
                if (review.user.toString() !== context.user._id) {
                    throw new Error('You can only remove your own reviews');
                }

                // Remove the review
                await Review.deleteOne({ _id }); // Use deleteOne instead of remove

                return review;
            } catch (err) {
                console.error(err);
                throw new Error('Failed to remove review');
            }
        },

        updateReview: async (parent, { _id, reviewText }, context) => {
            try {
                // Check if the user is authenticated
                if (!context.user) {
                    throw new Error('You need to be logged in to update a review');
                }

                // Find the review by ID
                const review = await Review.findById(_id);

                // Check if the review exists
                if (!review) {
                    throw new Error('Review not found');
                }

                // Check if the review belongs to the authenticated user
                if (review.user.toString() !== context.user._id) {
                    throw new Error('You can only update your own reviews');
                }

                // Preserve the status field
                const status = review.status;

                // Update the review
                review.reviewText = reviewText;
                await review.save();

                // Return the updated review object with the preserved status field
                return {
                    ...review.toObject(),
                    status // Preserve the status field in the returned object
                };
            } catch (err) {
                console.error(err);
                throw new Error('Failed to update review');
            }
        },



    }

};
module.exports = resolvers;