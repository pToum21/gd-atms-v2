import React from 'react';
import { Paper, Box, Typography } from '@mui/material';

const Footer = () => {
    return (
        <footer>
            <Box display="flex" justifyContent="space-between">
                <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px', backgroundColor: 'black', flex: 1, marginRight: '10px' }}>
                    <Typography variant="body1" style={{ color: 'white' }}>
                        <strong>Useful Links:</strong>
                        <ul>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Our CSR</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </Typography>
                </Paper>
                <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px', backgroundColor: 'black', flex: 1, marginLeft: '10px' }}>
                    <Typography variant="body1" style={{ color: 'white' }}>
                        <strong>Cities:</strong>
                        <ul>
                            <li>College Park, MD</li>
                            <li>Los Angeles, CA</li>
                            <li>Olney, MD</li>
                            <li>Big Bear, CA</li>
                        </ul>
                    </Typography>
                </Paper>
            </Box>
            <Paper elevation={3} style={{ borderRadius: '15px', borderTopLeftRadius: 0, borderTopRightRadius: 0, padding: '20px', backgroundColor: 'black' }}>
                <Typography variant="body1" style={{ color: 'white' }}>
                    &copy; {new Date().getFullYear()} GD ATMs
                </Typography>
            </Paper>
        </footer>
    );
};

export default Footer;
