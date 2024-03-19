import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Link as MuiLink, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const NavBar = () => {
    const isNormalOrBigScreen = useMediaQuery('(min-width:601px)');
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {isNormalOrBigScreen ? (
                <AppBar position="fixed" elevation={0}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', backgroundColor: 'white', height: '6.5vh' }}>
                        <MuiLink variant="h6" component={Link} to="/" sx={{ color: 'black', textDecoration: 'none', fontSize: '1.5rem', }}>
                            <span>
                                <b>
                                    GD
                                </b>
                            </span>
                            <span style={{ color: 'gray' }}>
                                ATMs
                            </span>
                        </MuiLink>
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '80px'}}>
                            <div style={{ padding: '5%', border: '1px solid grey', borderRadius: '50px', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                                <MuiLink component={Link} to="/reviews" sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'black', '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius: '50px', padding: '2%' } }}>Reviews</MuiLink>
                                <MuiLink component={Link} to="/contact" sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'black', '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius: '50px', padding: '2%' } }}>Contact</MuiLink>
                            </div>
                        </div>
                        <IconButton component={Link} to="/login" sx={{ color: 'black', textDecoration: 'none', borderRadius: '50%', height: '50px', width: '50px' }}>
                            <AccountCircleIcon  sx={{height: '30px', width: '30px'}}/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
            ) : (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid grey', borderRadius: '50px', gap: '1rem', width: '39%', margin: 'auto', marginTop: '3%' }}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start', width: '80%', paddingLeft: '8%' }}>
                        <IconButton
                            onClick={handleMenuOpen}
                            edge="start"
                            aria-controls="menu"
                            aria-haspopup="true"
                            aria-label="menu"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu"
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                        >
                            <MenuItem onClick={handleMenuClose} component={Link} to="/reviews">Reviews</MenuItem>
                            <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
                        </Menu>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <MuiLink variant="h6" component={Link} to="/" sx={{ color: 'black', textDecoration: 'none', fontSize: '.9rem', }}>
                            <span>
                                <b>
                                    GD
                                </b>
                            </span>
                            <span style={{ color: 'gray' }}>
                                ATMs
                            </span>
                        </MuiLink>
                    </div>
                    <IconButton component={Link} to="/login" sx={{ color: 'black', textDecoration: 'none', borderRadius: '50%' }}>
                        <AccountCircleIcon />
                    </IconButton>

                </div>
            )}
            <Toolbar />
        </>
    );
};

export default NavBar;
