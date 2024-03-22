import React from 'react';
import { Paper } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Paper elevation={3} style={{ borderRadius: '15px', borderTopLeftRadius: 0, borderTopRightRadius: 0, padding: '20px', backgroundColor: 'black' }}>
                <div className="container mx-auto">
                    <p style={{ color: 'white' }}>&copy; {new Date().getFullYear()} GD ATMs</p>
                </div>
            </Paper>
        </footer>
    );
};

export default Footer;
