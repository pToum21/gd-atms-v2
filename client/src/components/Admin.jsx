import React, { useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import {
    Button, Tab, Tabs, Typography, CircularProgress, Fade,
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper
} from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { pink } from '@mui/material/colors';
import { DELETE_USER, UPDATE_REVIEW_STATUS } from '../utils/mutations';
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
    const [updateReviewStatus] = useMutation(UPDATE_REVIEW_STATUS);

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
        } catch (error) {
            console.error('Error deleting user:', error.message);
        }
    };

    const handleReviewStatusChange = async (reviewId, status) => {
        try {
            await updateReviewStatus({ variables: { id: reviewId, status: status } });
        } catch (error) {
            console.error('Error updating review status:', error.message);
        }
    };

    if (usersLoading || reviewsLoading) return <CircularProgress style={{ margin: 'auto' }} />;
    if (usersError || reviewsError) return <p>Error :(</p>;

    const authUser = Auth.getProfile();
    const role = authUser.data.role;

    return (
        <Fade in={!reviewsLoading && !usersLoading}>
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography variant="h4" gutterBottom>Admin</Typography>
                    {role === 'admin' && !showReviews && (
                        <Button variant="contained" sx={{
                            backgroundColor: '#5D3FD3',
                            color: '#ffffff',
                            '&:hover': {
                                backgroundColor: '#eb7e95',
                            },
                        }} onClick={handleReviewsButtonClick}>
                            Tickets
                        </Button>
                    )}
                </div>
                {!showReviews && (
                    <div>
                        {role === 'admin' ? (
                            <>
                                <Typography variant="h5" gutterBottom>Users</Typography>
                                <TableContainer component={Paper} sx={{ background: 'rgb(72, 73, 75)', color: '#ffffff', maxHeight: '75vh', overflow: 'auto' }}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell sx={{ paddingLeft: '6rem', color: '#ffffff' }}>USERNAME</TableCell>
                                                <TableCell sx={{ color: '#ffffff' }}>EMAIL</TableCell>
                                                <TableCell sx={{ color: '#ffffff' }}>ROLE</TableCell>
                                                <TableCell sx={{ color: '#ffffff' }}>ACTION</TableCell>
                                            </TableRow> {/* Corrected this line */}
                                        </TableHead>
                                        <TableBody>
                                            {userData.users.map((user) => (
                                                <TableRow key={user._id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                                    <TableCell sx={{ paddingLeft: '6rem', color: '#ffffff' }}>{user.username}</TableCell>
                                                    <TableCell sx={{ color: '#ffffff' }}>{user.email}</TableCell>
                                                    <TableCell sx={{ color: '#ffffff' }}>{user.role ? user.role.charAt(0).toUpperCase() + user.role.slice(1) : 'N/A'}</TableCell>
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
                            </>
                        ) : (
                            <Error />
                        )}
                    </div>
                )}
                {showReviews && (
                    <div>
                        <Button variant="outlined" sx={{ borderColor: '#5D3FD3', color: '#5D3FD3', marginBottom: '20px', '&:hover': { borderColor: '#eb7e95', color: '#eb7e95' } }} onClick={handleBackButtonClick}>
                            Back to Users
                        </Button>
                        <Tabs value={tabValue} onChange={handleTabChange} textColor="primary" indicatorColor="primary">
                            <Tab label="Open Tickets" />
                            <Tab label="Closed Tickets" />
                        </Tabs>
                        <div className="reviews-content">
                            {tabValue === 0 && (
                                <div>
                                    <Typography variant="h5" gutterBottom>Open Tickets</Typography>
                                    {reviewsData.reviews
                                        .filter((review) => review.status === 'open')
                                        .map((review) => (
                                            <div key={review._id} className="review-card" style={{ marginBottom: '20px', padding: '20px', border: `1px solid #eb7e95`, borderRadius: '10px', backgroundColor: '#f3f3f3' }}>
                                                <Typography variant="body1" className="review-text">{review.reviewText}</Typography>
                                                <Typography variant="body2" className="review-author">By: {review.username}</Typography>
                                                <Typography variant="body2" className="review-date">Date: {new Date(review.createdAt).toLocaleDateString()}</Typography>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                                    <Button variant="outlined" sx={{ borderColor: '#5D3FD3', color: '#5D3FD3', '&:hover': { borderColor: '#eb7e95', color: '#eb7e95' } }} onClick={() => handleReviewStatusChange(review._id, 'closed')}>Close Ticket</Button>
                                                    <Button variant="outlined" sx={{ borderColor: '#5D3FD3', color: '#5D3FD3', '&:hover': { borderColor: '#eb7e95', color: '#eb7e95' } }} onClick={() => handleDeleteUser(review._id)}>Delete Ticket</Button>
                                                </div>
                                            </div>
                                        ))}
                                </div>
                            )}
                            {tabValue === 1 && (
                                <div>
                                    <Typography variant="h5" gutterBottom>Closed Tickets</Typography>
                                    {reviewsData.reviews
                                        .filter((review) => review.status === 'closed')
                                        .map((review) => (
                                            <div key={review._id} className="review-card" style={{ marginBottom: '20px', padding: '20px', border: `1px solid #eb7e95`, borderRadius: '10px', backgroundColor: '#f3f3f3' }}>
                                                <Typography variant="body1" className="review-text">{review.reviewText}</Typography>
                                                <Typography variant="body2" className="review-author">By: {review.username}</Typography>
                                                <Typography variant="body2" className="review-date">Date: {new Date(review.createdAt).toLocaleDateString()}</Typography>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                                                    <Button variant="outlined" sx={{ borderColor: '#5D3FD3', color: '#5D3FD3', '&:hover': { borderColor: '#eb7e95', color: '#eb7e95' } }} onClick={() => handleReviewStatusChange(review._id, 'open')}>Reopen Ticket</Button>
                                                    <Button variant="outlined" sx={{ borderColor: '#5D3FD3', color: '#5D3FD3', '&:hover': { borderColor: '#eb7e95', color: '#eb7e95' } }} onClick={() => handleDeleteUser(review._id)}>Delete Ticket</Button>
                                                </div>
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
