import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { keyframes } from '@emotion/react';

const moveAnimation = keyframes`
  0% { transform: translateX(-100vw); }
  100% { transform: translateX(100vw); }
`;

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
                position: 'relative',
                overflow: 'hidden',
                p: 2,
                bgcolor: 'rgb(72, 73, 75)'
            }}
        >
            <Container maxWidth="sm">
                <ErrorOutlineIcon sx={{ fontSize: 80, color: '#eb7e95', mb: 2 }} />
                <Typography variant="h3" gutterBottom sx={{ color: '#5D3FD3' }}>
                    Oops! Something went wrong.
                </Typography>
                <Typography variant="body1" gutterBottom sx={{ color: '#ffffff' }}>
                    {error && error.message ? error.message : 'An unknown error occurred.'}
                </Typography>
                <Button
                    variant="contained"
                    sx={{
                        mt: 2,
                        backgroundColor: '#eb7e95',
                        '&:hover': { backgroundColor: '#d4677d' },
                    }}
                    onClick={() => window.location.reload()}
                >
                    Refresh Page
                </Button>
            </Container>
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
                    overflow: 'hidden',
                }}
            >
                {[...Array(10)].map((_, i) => (
                    <Typography
                        key={i}
                        variant="h1"
                        sx={{
                            position: 'absolute',
                            color: 'rgb(72, 73, 75)',
                            top: `${Math.random() * 100}%`,
                            animation: `${moveAnimation} ${10 + Math.random() * 20}s linear infinite`,
                            fontSize: '5rem',
                            whiteSpace: 'nowrap',
                        }}
                    >
                        ERROR 404
                    </Typography>
                ))}
            </Box>
        </Box>
    );
};

export default ErrorPage;
