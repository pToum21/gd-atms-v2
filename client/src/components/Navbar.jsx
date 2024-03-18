import React from 'react';
import { AppBar, Toolbar, Typography, Button, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>
            <AppBar position="fixed" elevation={0}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white' }}>
                    <MuiLink variant="h6" component={Link} to="/" sx={{ color: 'black', textDecoration: 'none', fontSize: '1.8rem' }}>
                        <span style={{ color: 'gray' }}>GD</span>ATMs
                    </MuiLink>
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '9%' }}>
                        <div style={{ padding: '5%', border: '1px solid grey', borderRadius: '50px', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <MuiLink component={Link} to="/reviews" sx={{ textDecoration: 'none', fontSize: '1.2rem', color: 'black' }}>Reviews</MuiLink>
                            <MuiLink component={Link} to="/contact" sx={{ textDecoration: 'none', fontSize: '1.2rem', color: 'black' }}>Contact</MuiLink>
                        </div>
                    </div>
                    <MuiLink variant="h6" component={Link} to="/login" sx={{ color: 'black', textDecoration: 'none' }}>Login</MuiLink>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
};

export default NavBar;
