import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const ErrorPage = ({ error }) => {
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
            }}
        >
            <Container maxWidth="sm">
                <ErrorOutlineIcon sx={{ fontSize: 80, color: '#1976d2', mb: 2 }} />
                <Typography variant="h3" gutterBottom>
                    Oops! Something went wrong.
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {error && error.message ? error.message : 'An unknown error occurred.'}
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => window.location.reload()}
                >
                    Refresh Page
                </Button>
            </Container>
        </Box>
    );
};

export default ErrorPage;
