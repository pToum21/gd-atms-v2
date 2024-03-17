import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import gdLogo from '../../public/gd-logo.png';

const Navbar = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    return (
        <React.Fragment>
            <AppBar position="static" sx={{ borderRadius: '30px', background: 'linear-gradient(90deg, #5eff6b 0%, #009688 100%)', width: '93.5%', right: '3.2%', border: '2px solid white', height: '80px' }}>
                <Toolbar>
                    <Typography variant="h6" noWrap sx={{ flexGrow: 1 }}>
                        <Link to="/">
                            <img src={gdLogo} alt="gravedigger atms logo" style={{ height: '100%', width: 'auto' }} />
                        </Link>
                    </Typography>
                    {isSmallScreen ? (
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={toggleDrawer}
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <List sx={{ display: { xs: 'none', md: 'flex' } }}>
                            {[
                                { text: 'Home', path: '/' },
                                { text: 'About', path: '/about' },
                                { text: 'Reviews', path: '/reviews' },
                                { text: 'Contact', path: '/contact' }
                            ].map((item, index) => (
                                <ListItemButton key={item.text}>
                                    <Link to={item.path}>
                                        <ListItemText primary={item.text} />
                                    </Link>
                                </ListItemButton>
                            ))}
                        </List>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer} sx={{ '& .MuiDrawer-paper': { width: '100%' } }}>
                <IconButton sx={{ position: 'absolute', top: '10px', right: '10px' }} onClick={toggleDrawer} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <div role="presentation" onClick={toggleDrawer} onKeyDown={toggleDrawer}>
                    <List>
                        {[
                            { text: 'Home', path: '/' },
                            { text: 'About', path: '/about' },
                            { text: 'Reviews', path: '/reviews' },
                            { text: 'Contact', path: '/contact' }
                        ].map((item, index) => (
                            <ListItemButton key={item.text}>
                                <Link to={item.path}>
                                    <ListItemText primary={item.text} />
                                </Link>
                            </ListItemButton>
                        ))}
                    </List>
                </div>
            </Drawer>
        </React.Fragment>
    );
};

export default Navbar;
