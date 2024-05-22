import React, { useEffect, useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { Box, Card, CardContent, CircularProgress, Fade, Button, TextField } from '@mui/material';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Sidebar from './Sidebar';
import { QUERY_MY_REVIEWS } from '../utils/queries';
import { UPDATE_REVIEW, REMOVE_REVIEW } from '../utils/mutations';
import AuthService from '../utils/auth';
import '../styles/review.css';

const ViewYourTickets = () => {
    const { loading, error, data } = useQuery(QUERY_MY_REVIEWS);
    const [updateReview] = useMutation(UPDATE_REVIEW);
    const [removeReview] = useMutation(REMOVE_REVIEW);
    const [componentLoaded, setComponentLoaded] = useState(false);
    const [editingReviewId, setEditingReviewId] = useState(null);
    const [editReviewText, setEditReviewText] = useState('');
    const [deletingReviewId, setDeletingReviewId] = useState(null);

    useEffect(() => {
        setComponentLoaded(true);
    }, []);

    if (!AuthService.loggedIn()) {
        return <p>You must be logged in to view your tickets.</p>;
    }

    if (loading) return <CircularProgress style={{ margin: 'auto' }} />;
    if (error) return <p>Error loading tickets. Please try again.</p>;

    const reviews = data?.myReviews || [];

    const handleEditClick = (review) => {
        setEditingReviewId(review._id);
        setEditReviewText(review.reviewText);
    };

    const handleSaveClick = async () => {
        try {
            await updateReview({ variables: { id: editingReviewId, reviewText: editReviewText } });
            setEditingReviewId(null);
        } catch (err) {
            console.error(err);
        }
    };

    const handleCancelClick = () => {
        setEditingReviewId(null);
        setEditReviewText('');
    };

    const handleRemoveClick = async (id) => {
        setDeletingReviewId(id);
        try {
            await removeReview({ variables: { id } });
            // Optionally, you can refetch the reviews or update the local cache to remove the deleted review
        } catch (err) {
            console.error(err);
        } finally {
            setDeletingReviewId(null);
        }
    };

    const formatDate = (timestamp) => {
        const date = new Date(parseInt(timestamp));
        return date.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };

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
                                        {editingReviewId === review._id ? (
                                            <>
                                                <TextField
                                                    value={editReviewText}
                                                    onChange={(e) => setEditReviewText(e.target.value)}
                                                    fullWidth
                                                    variant="outlined"
                                                    multiline
                                                    rows={4}
                                                />
                                                <Button
                                                    onClick={handleSaveClick}
                                                    color="primary"
                                                    variant="contained"
                                                    sx={{
                                                        backgroundColor: '#5F46F8',
                                                        marginRight: '10px',
                                                        '&:hover': {
                                                            backgroundColor: '#4D38C5',
                                                        }
                                                    }}
                                                >
                                                    Save
                                                </Button>
                                                <Button
                                                    onClick={handleCancelClick}
                                                    color="secondary"
                                                    sx={{
                                                        backgroundColor: "#eb7e95",
                                                        color: "white",
                                                        '&:hover': {
                                                            backgroundColor: "#d67086",
                                                        }
                                                    }}
                                                    variant="outlined"
                                                >
                                                    Cancel
                                                </Button>
                                            </>
                                        ) : (
                                            <>
                                                <div className="ticket-header">
                                                    <div className="profile-icon"></div>
                                                    <p className="review-username">{review.username}</p>
                                                    <Button
                                                        onClick={() => handleRemoveClick(review._id)}
                                                        color="secondary"
                                                        variant="contained"
                                                        sx={{
                                                            backgroundColor: '#eb7e95',
                                                            marginLeft: 'auto',
                                                            '&:hover': {
                                                                backgroundColor: '#CC0000',
                                                            }
                                                        }}
                                                        disabled={deletingReviewId === review._id}
                                                    >
                                                        {deletingReviewId === review._id ? 'Removing...' : 'Remove Ticket'}
                                                    </Button>
                                                </div>
                                                <p className="review-text">{review.reviewText}</p>
                                                <div className="ticket-footer">
                                                    <p className="review-date">{formatDate(review.createdAt)}</p>
                                                    <p className="review-status">{review.status}</p>
                                                    <Button
                                                        onClick={() => handleEditClick(review)}
                                                        color="primary"
                                                        variant="contained"
                                                        sx={{
                                                            backgroundColor: '#5F46F8',
                                                            '&:hover': {
                                                                backgroundColor: '#4D38C5',
                                                            }
                                                        }}
                                                    >
                                                        Edit
                                                    </Button>
                                                </div>
                                            </>
                                        )}
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
