import React, { useState, useEffect } from 'react';
import { Typography, IconButton, Paper } from '@mui/material';
import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'; // Import the RemoveCircleOutline icon

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '60vh',
    padding: '20px',
};

const contentContainerStyle = {
    textAlign: 'center',
    width: '70vw',
};

const faqContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    padding: '10px',
    marginBottom: '20px',
};

const faqTextStyle = {
    textAlign: 'center',
    marginRight: '16px',
    fontSize: '2rem',
};

const FAQ = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    useEffect(() => {
        // Scroll to the top of the page when component is mounted
        window.scrollTo(0, 0);
    }, []);

    return (
        <div style={containerStyle}>
            <div style={contentContainerStyle}>
                <Typography sx={{ fontSize: "3rem", marginBottom: '4%', marginTop: '10%', fontWeight: '500' }}>
                    The answer to money is abundance and financial success, that means everything is 8
                </Typography>
                <Typography sx={{ fontSize: "1.7rem", marginBottom: '10%' }}>
                    Carry on
                </Typography>
            </div>
            <div style={faqContainerStyle}>
                <Typography variant="body1" style={faqTextStyle}>
                    Is this page completed yet?
                </Typography>
                <IconButton onClick={handleToggle}>
                    {open ? <RemoveCircleOutline /> : <AddCircleOutline />} {/* Conditional rendering of the icon */}
                </IconButton>
            </div>
            {open && (
                <Paper elevation={3} style={{ padding: '10px', backgroundColor: '#f0f0f0', fontSize: '1.5rem', textAlign: 'center' }}>
                    No. But you can help it along by asking your question. gravediggeratms@gmail.com
                </Paper>
            )}
        </div>
    );
};

export default FAQ;
