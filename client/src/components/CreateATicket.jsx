import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_REVIEW } from '../utils/mutations';
import Sidebar from './Sidebar';
import { Box, TextField, Button, Typography, Paper, useMediaQuery, useTheme } from '@mui/material';
import AuthService from '../utils/auth';

const CreateATicket = () => {
    const [reviewText, setReviewText] = useState('');
    const [addReview, { data, loading, error }] = useMutation(ADD_REVIEW);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addReview({ variables: { reviewText } });
            // Clear form after submission
            setReviewText('');
        } catch (err) {
            console.error(err);
        }
    };

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (!AuthService.loggedIn()) {
        return (
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '100vh',
                    background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)',
                    textAlign: 'center',
                    p: 2,
                    bgcolor: 'rgb(72, 73, 75)'
                }}
            >
                <Typography variant="h3" gutterBottom sx={{ color: '#5D3FD3' }}>
                    You must be logged in to create a ticket.
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mt: 2,
                        backgroundColor: '#eb7e95',
                        '&:hover': { backgroundColor: '#d4677d' },
                    }}
                    onClick={() => AuthService.login()}
                >
                    Log In
                </Button>
            </Box>
        );
    }

    return (
        <Box display="flex" flexDirection={isMobile ? 'column' : 'row'}>
            {!isMobile && (
                <Box width="210px">
                    <Sidebar />
                </Box>
            )}
            <Box flex={1} p={2}>
                <Paper elevation={3} sx={{ padding: '20px', borderRadius: '30px' }}>
                    <Typography variant="h4" gutterBottom sx={{ color: '#5D3FD3' }}>
                        Create A Ticket
                    </Typography>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            fullWidth
                            label="Tell us about your experience..."
                            value={reviewText}
                            onChange={(e) => setReviewText(e.target.value)}
                            required
                            margin="normal"
                            multiline
                            rows={4}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            disabled={loading}
                            sx={{
                                marginTop: '20px',
                                backgroundColor: '#5F46F8',
                                '&:hover': {
                                    backgroundColor: '#4D38C5',
                                }
                            }}
                        >
                            {loading ? 'Submitting...' : 'Submit A Ticket'}
                        </Button>
                    </form>
                    {error && <Typography color="error">Error submitting the review: {error.message}</Typography>}
                    {data && <Typography color="primary">Review submitted successfully!</Typography>}
                </Paper>
            </Box>
        </Box>
    );
};

export default CreateATicket;
