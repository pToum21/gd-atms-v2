import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <AppBar position="fixed" elevation={0}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white' }}>
                    <Typography variant="h6" sx={{ color: 'black' }}>Logo</Typography>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ padding: '5%', border: '1px solid grey', borderRadius: '50px', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                            <Link style={{ textDecoration: 'none', fontSize: '1.2rem', color: 'black' }}>Reviews</Link>
                            <Link style={{ textDecoration: 'none', fontSize: '1.2rem', color: 'black' }}>Contact</Link>
                        </div>
                    </div>
                    <Typography variant="h6" sx={{ color: 'black' }}>Login</Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
};

export default NavBar;
