import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, useMediaQuery, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Login from './Login'; // Make sure Login component is properly imported
import Auth from '../utils/auth'; // Make sure Auth utility is properly imported

const NavBar = () => {
    const isNormalOrBigScreen = useMediaQuery('(min-width:601px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false); // State to manage modal visibility
    const isLoggedIn = Auth.loggedIn(); // Check if the user is logged in

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLoginButtonClick = () => {
        if (isLoggedIn) {
            // If user is logged in, log them out
            Auth.logout();
        } else {
            // If user is not logged in, open the login modal
            setShowLoginModal(true);
        }
    };

    const handleLogout = () => {
        Auth.logout();
        handleMenuClose();
    };

    return (
        <div>
            <AppBar elevation={0} sx={{ backgroundColor: 'transparent', }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', height: '6.5vh', }}>
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
                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '80px' }}>
                        {isNormalOrBigScreen ? (
                            <div style={{ padding: '5%', border: '1px solid grey', borderRadius: '50px', display: 'flex', justifyContent: 'center', gap: '1rem', background: 'white' }}>
                                <MuiLink component={Link} to="/reviews" sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'black', '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius: '50px', padding: '2%' } }}>Reviews</MuiLink>
                                <MuiLink component={Link} to="/contact" sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'black', '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius: '50px', padding: '2%' } }}>Contact</MuiLink>
                            </div>
                        ) : (
                            <IconButton
                                onClick={handleMenuOpen}
                                edge="start"
                                aria-controls="menu"
                                aria-haspopup="true"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                        )}
                    </div>
                    <IconButton onClick={handleLoginButtonClick} sx={{ color: 'black', textDecoration: 'none', borderRadius: '50%', height: '50px', width: '50px' }}>
                        {isLoggedIn ? <span>Logout</span> : <AccountCircleIcon sx={{ height: '30px', width: '30px' }} />}
                    </IconButton>
                </Toolbar>
            </AppBar>
            {isNormalOrBigScreen ? null : (
                <Menu
                    id="menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                >
                    <MenuItem onClick={handleMenuClose} component={Link} to="/reviews">Reviews</MenuItem>
                    <MenuItem onClick={handleMenuClose} component={Link} to="/contact">Contact</MenuItem>
                    {isLoggedIn ? (
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                    ) : (
                        <MenuItem onClick={handleLoginButtonClick}>Login</MenuItem>
                    )}
                </Menu>
            )}
            {/* Render Login component as modal if showLoginModal is true */}
            <Login open={showLoginModal} onClose={() => setShowLoginModal(false)} />
        </div>
    );
};

export default NavBar;
