import React, { useState } from 'react';
import { Box, Typography, IconButton, Paper } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
};

const contentContainerStyle = {
    textAlign: 'center',
};

const faqContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    padding: '10px',
};

const faqTextStyle = {
    textAlign: 'center',
    marginRight: '16px',
};

const FAQ = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <div style={containerStyle}>
            <div style={contentContainerStyle}>
                <Typography variant="h4">
                    The answer to money is abundance, financial success, and everything is 8
                </Typography>
                <Typography variant="body1">
                    Carry on
                </Typography>
            </div>
            <div style={faqContainerStyle}>
                <Typography variant="body1" style={faqTextStyle}>
                    Is this page completed yet?
                </Typography>
                <IconButton onClick={handleToggle}>
                    <AddCircleOutline />
                </IconButton>
            </div>
            {open && (
                <Paper elevation={3} style={{ marginTop: '16px', padding: '10px', backgroundColor: '#f0f0f0' }}>
                    No. But you can help it along by asking your question. gravediggeratms@gmail.com
                </Paper>
            )}
        </div>
    );
};

export default FAQ;
