import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
    Button, Tab, Tabs, Typography, CircularProgress, Fade,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { pink } from '@mui/material/colors';
import { DELETE_USER } from '../utils/mutations';
import { QUERY_ALL_USERS, QUERY_ALL_REVIEWS } from '../utils/queries';
import Auth from '../utils/auth';
import Error from '../pages/Error';
import '../styles/review.css';

const muipink = pink[300];

const Admin = () => {
    const [tabValue, setTabValue] = useState(0);
    const [showReviews, setShowReviews] = useState(false);

    const { loading: usersLoading, error: usersError, data: userData, refetch: refetchUsers } = useQuery(QUERY_ALL_USERS);
    const { loading: reviewsLoading, error: reviewsError, data: reviewsData } = useQuery(QUERY_ALL_REVIEWS);
    const [deleteUserMutation] = useMutation(DELETE_USER, {
        refetchQueries: [{ query: QUERY_ALL_USERS }],
    });

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    const handleReviewsButtonClick = () => {
        setShowReviews(true);
    };

    const handleBackButtonClick = () => {
        setShowReviews(false);
    };

    const handleDeleteUser = async (userId) => {
        try {
            const { data } = await deleteUserMutation({ variables: { id: userId } });
            console.log('User deleted:', data.deleteUser);

            // Manually update cache to remove deleted user
            const updatedUsers = userData.users.filter(user => user._id !== userId);
            cache.writeQuery({
                query: QUERY_ALL_USERS,
                data: { users: updatedUsers },
            });
        } catch (error) {
            console.error('Error deleting user:', error.message);
        }
    };

    if (usersLoading || reviewsLoading) return <CircularProgress style={{ margin: 'auto' }} />;
    if (usersError || reviewsError) return <p>Error :(</p>;

    const authUser = Auth.getProfile();
    const role = authUser.data.role;

    return (
        <Fade in={!reviewsLoading && !usersLoading}>
            <div>
                <Typography variant="h4" gutterBottom>Admin</Typography>
                {!showReviews && (
                    <div>
                        {role === 'admin' ? (
                            <>
                                <Typography variant="h5" gutterBottom>Users</Typography>
                                <TableContainer component={Paper} sx={{ background: '#f3f3ec', maxHeight: '75vh', overflow: 'scroll' }}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ paddingLeft: '6rem' }}>USERNAME</TableCell>
                                                <TableCell>EMAIL</TableCell>
                                                <TableCell>ROLE</TableCell>
                                                <TableCell>ACTION</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {userData.users.map((user) => (
                                                <TableRow key={user._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell sx={{ paddingLeft: '6rem' }}>{user.username}</TableCell>
                                                    <TableCell>{user.email}</TableCell>
                                                    <TableCell>{user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'N/A'}</TableCell>
                                                    <TableCell>
                                                        <a onClick={() => handleDeleteUser(user._id)} href="#">
                                                            <DeleteForeverIcon sx={{ color: muipink }} />
                                                        </a>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                                <Button variant="contained" color="primary" onClick={handleReviewsButtonClick}>
                                    Reviews
                                </Button>
                            </>
                        ) : (
                            <Error />
                        )}
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
                                    {reviewsData.reviews
                                        .filter((review) => review.status === 'open')
                                        .map((review) => (
                                            <div key={review._id} className="review-card">
                                                <p className="review-text">{review.reviewText}</p>
                                                <p className="review-author">By: {review.username}</p>
                                            </div>
                                        ))}
                                </div>
                            )}
                            {tabValue === 1 && (
                                <div>
                                    <Typography variant="h5" gutterBottom>Closed Reviews</Typography>
                                    {reviewsData.reviews
                                        .filter((review) => review.status === 'closed')
                                        .map((review) => (
                                            <div key={review._id} className="review-card">
                                                <p className="review-text">{review.reviewText}</p>
                                                <p className="review-author">By: {review.username}</p>
                                            </div>
                                        ))}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </Fade>
    );
};

export default Admin;
