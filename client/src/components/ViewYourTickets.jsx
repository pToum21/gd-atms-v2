import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Card, CardContent, CircularProgress, Fade } from '@mui/material';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Sidebar from './Sidebar';
import { QUERY_MY_REVIEWS } from '../utils/queries';
import '../styles/review.css';

const ViewYourTickets = () => {
    const { loading, error, data } = useQuery(QUERY_MY_REVIEWS);
    const [componentLoaded, setComponentLoaded] = useState(false);

    useEffect(() => {
        setComponentLoaded(true);
    }, []);

    if (loading) return <CircularProgress style={{ margin: 'auto' }} />;
    if (error) return <p>You must be logged in to view your tickets.</p>;

    const reviews = data?.myReviews || [];

    return (
        <Fade in={componentLoaded}>
            <div className="reviews-container">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="reviews-content">
                    <h1 className="reviews-title">Your Tickets</h1>
                    <TransitionGroup className="reviews-transition-group">
                        {reviews.map((review) => (
                            <CSSTransition key={review._id} timeout={300} classNames="scale">
                                <Card className="review-card">
                                    <CardContent>
                                        <div className="ticket-header">
                                            <div className="profile-icon"></div>
                                            <p className="review-username">{review.username}</p>
                                        </div>
                                        <p className="review-text">{review.reviewText}</p>
                                        <div className="ticket-footer">
                                            <p className="review-date">{review.createdAt}</p>
                                            <p className="review-status">{review.status}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                    {reviews.length === 0 && (
                        <Box className="no-matching-reviews">
                            <p>You have no tickets.</p>
                        </Box>
                    )}
                </div>
            </div>
        </Fade>
    );
};

export default ViewYourTickets;
