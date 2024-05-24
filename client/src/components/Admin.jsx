import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Button, Tab, Tabs, Typography, CircularProgress, Fade } from '@mui/material';
import { QUERY_ALL_USERS, QUERY_ALL_REVIEWS } from '../utils/queries'; // Import your queries
import '../styles/review.css';

const Admin = () => {
    const [tabValue, setTabValue] = useState(0);
    const [showReviews, setShowReviews] = useState(false);

    const { loading: usersLoading, error: usersError, data: userData } = useQuery(QUERY_ALL_USERS);
    const { loading: reviewsLoading, error: reviewsError, data: reviewsData } = useQuery(QUERY_ALL_REVIEWS);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleReviewsButtonClick = () => {
        setShowReviews(true);
    };

    const handleBackButtonClick = () => {
        setShowReviews(false);
    };

    if (usersLoading || reviewsLoading) return <CircularProgress style={{ margin: 'auto' }} />;
    if (usersError || reviewsError) return <p>Error :(</p>;

    return (
        <Fade in={!reviewsLoading && !usersLoading}>
            <div>
                <Typography variant="h4" gutterBottom>Admin</Typography>
                {!showReviews && (
                    <div>
                        <Typography variant="h5" gutterBottom>Users</Typography>
                        {/* Display users */}
                        {userData.users.map(user => (
                            <div key={user._id}>
                                <p>Email: {user.email}</p>
                                <p>Username: {user.username}</p>
                            </div>
                        ))}
                        <Button variant="contained" color="primary" onClick={handleReviewsButtonClick}>
                            Reviews
                        </Button>
                    </div>
                )}
                {showReviews && (
                    <div>
                        <Button variant="outlined" color="primary" onClick={handleBackButtonClick}>
                            Back to Users
                        </Button>
                        <Tabs value={tabValue} onChange={handleTabChange}>
                            <Tab label="Open Reviews" />
                            <Tab label="Closed Reviews" />
                        </Tabs>
                        <div className="reviews-content">
                            {tabValue === 0 && (
                                <div>
                                    <Typography variant="h5" gutterBottom>Open Reviews</Typography>
                                    {/* Display open reviews */}
                                    {reviewsData.reviews.map(review => (
                                        review.status === 'open' && (
                                            <div key={review._id} className="review-card">
                                                <p className="review-text">{review.reviewText}</p>
                                                <p className="review-author">By: {review.username}</p>
                                            </div>
                                        )
                                    ))}
                                </div>
                            )}
                            {tabValue === 1 && (
                                <div>
                                    <Typography variant="h5" gutterBottom>Closed Reviews</Typography>
                                    {/* Display closed reviews */}
                                    {reviewsData.reviews.map(review => (
                                        review.status === 'closed' && (
                                            <div key={review._id} className="review-card">
                                                <p className="review-text">{review.reviewText}</p>
                                                <p className="review-author">By: {review.username}</p>
                                            </div>
                                        )
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Fade>
    );
}

export default Admin;
