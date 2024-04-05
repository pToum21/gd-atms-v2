import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Login from './Login'; // Import the Login component

const NavBar = () => {
    const isNormalOrBigScreen = useMediaQuery('(min-width:601px)');
    const [anchorEl, setAnchorEl] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false); // State to manage modal visibility

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLoginButtonClick = () => {
        setShowLoginModal(true); // Open the login modal
    };

    return (
        <>
            {isNormalOrBigScreen ? (
                <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'transparent' }}>
                    <Toolbar sx={{ display: 'flex', justifyContent: 'space-around', height: '6.5vh' }}>
                        <Link variant="h6" component={Link} to="/" sx={{ color: 'black', textDecoration: 'none', fontSize: '1.5rem', }}>
                            <span>
                                <b>
                                    GD
                                </b>
                            </span>
                            <span style={{ color: 'gray' }}>
                                ATMs
                            </span>
                        </Link>
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '80px' }}>
                            <div style={{ padding: '5%', border: '1px solid grey', borderRadius: '50px', display: 'flex', justifyContent: 'center', gap: '1rem', background: 'white' }}>
                                <Link component={Link} to="/reviews" sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'black', '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius: '50px', padding: '2%' } }}>Reviews</Link>
                                <Link component={Link} to="/contact" sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'black', '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius: '50px', padding: '2%' } }}>Contact</Link>
                            </div>
                        </div>
                        <IconButton onClick={handleLoginButtonClick} sx={{ color: 'black', textDecoration: 'none', borderRadius: '50%', height: '50px', width: '50px' }}>
                            <AccountCircleIcon sx={{ height: '30px', width: '30px' }} />
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
                        <Link variant="h6" component={Link} to="/" sx={{ color: 'black', textDecoration: 'none', fontSize: '.9rem', }}>
                            <span>
                                <b>
                                    GD
                                </b>
                            </span>
                            <span style={{ color: 'gray' }}>
                                ATMs
                            </span>
                        </Link>
                    </div>
                    <IconButton onClick={handleLoginButtonClick} sx={{ color: 'black', textDecoration: 'none', borderRadius: '50%' }}>
                        <AccountCircleIcon />
                    </IconButton>

                </div>
            )}
            {/* login modal */}
            <Login open={showLoginModal} onClose={() => setShowLoginModal(false)} />
        </>
    );
};

export default NavBar;
