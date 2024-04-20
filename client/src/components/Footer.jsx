import React from 'react';
import { Paper, Box, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'; // Assuming you are using React Router

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'black' }}>
            <Box display="flex" justifyContent="space-between" maxWidth="800px" margin="0 auto " sx={{ backgroundColor: 'black' }}>
                <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px', backgroundColor: '#48494b', flex: 1, marginRight: '10px', marginTop: '10px', marginBottom: '20px' }}>
                    <Typography variant="body1" style={{ color: 'white' }}>
                        <strong>
                            <span>
                                <b>
                                    GD
                                </b>
                            </span>
                            <span style={{ color: 'gray' }}>
                                ATMs
                            </span>
                        </strong>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li><Link component={RouterLink} to="/faq" color="inherit" underline="none" sx={{ '&:hover': { color: '#5D3FD3', textDecoration: 'underline', textDecorationColor: 'white' } }}>FAQ  ↗</Link></li>
                            <li><Link component={RouterLink} to="/about" color="inherit" underline="none" sx={{ '&:hover': { color: '#5D3FD3', textDecoration: 'underline', textDecorationColor: 'white' } }}>About  ↗</Link></li>
                            <li><Link component={RouterLink} to="/contact" color="inherit" underline="none" sx={{ '&:hover': { color: '#5D3FD3', textDecoration: 'underline', textDecorationColor: 'white' } }}>Contact  ↗</Link></li>
                            <li><Link component={RouterLink} to="/privacy-policy" color="inherit" underline="none" sx={{ '&:hover': { color: '#5D3FD3', textDecoration: 'underline', textDecorationColor: 'white' } }}>Privacy Policy  ↗</Link></li>
                        </ul>
                        <p>© 2024 GDATMs</p>
                    </Typography>
                </Paper>
                <Paper elevation={3} style={{ borderRadius: '15px', padding: '20px', backgroundColor: '#48494b', flex: 1, marginLeft: '10px', marginTop: '10px', marginBottom: '20px' }}>
                    <Typography variant="body1" style={{ color: 'white' }}>
                        <strong>Cities</strong>
                        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
                            <li>College Park, MD</li>
                            <li>Los Angeles, CA</li>
                            <li>Olney, MD</li>
                            <li>Big Bear, CA</li>
                        </ul>
                        <strong>For Everyone, Everywhere ♡</strong>
                    </Typography>
                </Paper>
            </Box>
        </footer>
    );
};

export default Footer;
