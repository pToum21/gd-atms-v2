import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
            <AppBar position="fixed" elevation={0}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', height: '6.5vh' }}>
                    <MuiLink variant="h6" component={Link} to="/" sx={{ color: 'black', textDecoration: 'none', fontSize: '1.8rem', }}>
                        <span>
                            <b>
                                GD
                            </b>
                        </span>
                        <span style={{ color: 'gray' }}>
                            ATMs
                        </span>
                    </MuiLink>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '9%' }}>
                        <div style={{ padding: '5%', border: '1px solid grey', borderRadius: '50px', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <MuiLink component={Link} to="/reviews" sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'black', '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius: '50px', padding: '2%' } }}>Reviews</MuiLink>
                            <MuiLink component={Link} to="/contact" sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'black', '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius: '50px', padding: '2%' } }}>Contact</MuiLink>
                        </div>
                    </div>
                    <MuiLink variant="h6" component={Link} to="/login" sx={{ color: 'black', textDecoration: 'none', }}>Login</MuiLink>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
};

export default NavBar;
