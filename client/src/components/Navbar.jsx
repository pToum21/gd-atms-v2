import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const NavBar = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography variant="h6">My App</Typography>
                    <div sx={{ display: 'flex', gap: '1rem' }}>
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">About</Button>
                        <Button color="inherit">Services</Button>
                        <Button color="inherit">Contact</Button>
                    </div>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </>
    );
};

export default NavBar;
