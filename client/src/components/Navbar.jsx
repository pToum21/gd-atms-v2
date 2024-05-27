import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, useMediaQuery, Link as MuiLink } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import CloseIcon from '@mui/icons-material/Close';
import Login from './Login';
import Auth from '../utils/auth';
import { keyframes } from '@emotion/react';

// Define the click animation
const clickAnimation = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

const NavBar = () => {
    const isNormalOrBigScreen = useMediaQuery('(min-width:601px)');
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [showLoginModal, setShowLoginModal] = useState(false); // State to manage modal visibility
    const isLoggedIn = Auth.loggedIn(); // Check if the user is logged in

    const handleDrawerOpen = () => {
        setIsDrawerOpen(true);
    };

    const handleDrawerClose = () => {
        setIsDrawerOpen(false);
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
        handleDrawerClose();
    };

    return (
        <div>
            <AppBar elevation={0} sx={{ backgroundColor: 'transparent' }}>
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', height: '6.5vh' }}>
                    {!isNormalOrBigScreen && (
                        <IconButton
                            onClick={handleDrawerOpen}
                            edge="start"
                            aria-label="menu"
                            sx={{ marginRight: '10px', backgroundColor: 'white' }}
                        >
                            <MenuIcon />
                        </IconButton>
                    )}
                    <MuiLink variant="h6" component={Link} to="/" sx={{ color: 'black', textDecoration: 'none', fontSize: '1.5rem', backgroundColor: 'white', borderRadius: '50px', padding: '2px' }}>
                        <span>
                            <b>
                                GD
                            </b>
                        </span>
                        <span style={{ color: 'gray' }}>
                            ATMs
                        </span>
                    </MuiLink>
                    {isNormalOrBigScreen && (
                        <div style={{ display: 'flex', alignItems: 'center', marginRight: '60px', border: 'solid 1px gray', borderRadius: '50px', backgroundColor: 'white' }}>
                            <MuiLink component={Link} to="/reviews" sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'black', '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius: '50px', padding: '2%' }, borderRadius: '50px', padding: '8px' }}>Support</MuiLink>
                            <MuiLink component={Link} to="/contact" sx={{ textDecoration: 'none', fontSize: '1.1rem', color: 'black', '&:hover': { backgroundColor: 'rgba(128, 128, 128, 0.2)', borderRadius: '50px', padding: '2%' }, padding: '8px' }}>Contact</MuiLink>
                        </div>
                    )}
                    {isNormalOrBigScreen && (
                        <IconButton onClick={handleLoginButtonClick} sx={{ color: 'black', textDecoration: 'none', height: '50px', width: '50px', backgroundColor: 'white', borderRadius: '50px' }}>
                            {isLoggedIn ? <LogoutIcon /> : <AccountCircleIcon sx={{ height: '30px', width: '30px' }} />}
                        </IconButton>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={handleDrawerClose}
                PaperProps={{
                    sx: {
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#5D3FD3', // Set background color
                        color: 'white', 
                        
                    },
                }}
            >
                <List sx={{ padding: 0 }}>
                    <ListItem button onClick={handleDrawerClose} sx={{ justifyContent: 'flex-end', padding: '10px' }}>
                        <CloseIcon sx={{ color: 'white' }} />
                    </ListItem>
                    <ListItem button component={Link} to="/reviews" onClick={handleDrawerClose} sx={{ fontSize: '1.5rem', padding: '20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, '&:active': { animation: `${clickAnimation} 0.3s ease` } }}>
                        <ListItemText primary="Support Hub" sx={{ fontSize: '1.5rem' }} />
                    </ListItem>
                    <ListItem button component={Link} to="/contact" onClick={handleDrawerClose} sx={{ fontSize: '1.5rem', padding: '20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, '&:active': { animation: `${clickAnimation} 0.3s ease` } }}>
                        <ListItemText primary="Contact" sx={{ fontSize: '1.5rem' }} />
                    </ListItem>
                    <ListItem button component={Link} to="/view-your-tickets" onClick={handleDrawerClose} sx={{ fontSize: '1.5rem', padding: '20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, '&:active': { animation: `${clickAnimation} 0.3s ease` } }}>
                        <ListItemText primary="View My Tickets" sx={{ fontSize: '1.5rem' }} />
                    </ListItem>
                    <ListItem button component={Link} to="/create-a-ticket" onClick={handleDrawerClose} sx={{ fontSize: '1.5rem', padding: '20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, '&:active': { animation: `${clickAnimation} 0.3s ease` } }}>
                        <ListItemText primary="Create A Ticket" sx={{ fontSize: '1.5rem' }} />
                    </ListItem>
                    <ListItem button component={Link} to="/terminal-news" onClick={handleDrawerClose} sx={{ fontSize: '1.5rem', padding: '20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, '&:active': { animation: `${clickAnimation} 0.3s ease` } }}>
                        <ListItemText primary="Terminal Map" sx={{ fontSize: '1.5rem' }} />
                    </ListItem>
                    <ListItem button component={Link} to="/phone-support" onClick={handleDrawerClose} sx={{ fontSize: '1.5rem', padding: '20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, '&:active': { animation: `${clickAnimation} 0.3s ease` } }}>
                        <ListItemText primary="Phone Support" sx={{ fontSize: '1.5rem' }} />
                    </ListItem>
                    {isLoggedIn ? (
                        <ListItem button onClick={handleLogout} sx={{ fontSize: '1.5rem', padding: '20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, '&:active': { animation: `${clickAnimation} 0.3s ease` } }}>
                            <ListItemText primary="Logout" sx={{ fontSize: '1.5rem' }} />
                        </ListItem>
                    ) : (
                        <ListItem button onClick={handleLoginButtonClick} sx={{ fontSize: '1.5rem', padding: '20px', '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.2)' }, '&:active': { animation: `${clickAnimation} 0.3s ease` } }}>
                            <ListItemText primary="Login" sx={{ fontSize: '1.5rem' }} />
                        </ListItem>
                    )}
                </List>
            </Drawer>
            {/* Render Login component as modal if showLoginModal is true */}
            <Login open={showLoginModal} onClose={() => setShowLoginModal(false)} />
        </div>
    );
};

export default NavBar;
