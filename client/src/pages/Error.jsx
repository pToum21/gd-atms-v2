import React from 'react';
import { Typography, Button } from '@mui/material';

const ErrorPage = ({ error }) => {
    return (
        <div className="root">
            <Typography variant="h3" className="errorMessage">
                Oops! Something went wrong.
            </Typography>
            <Typography variant="body1" className="errorMessage">
                {error && error.message ? error.message : 'An unknown error occurred.'}
            </Typography>
            <Button
                variant="contained"
                color="primary"
                className="button"
                onClick={() => window.location.reload()}
            >
                Refresh Page
            </Button>
        </div>
    );
};

export default ErrorPage;