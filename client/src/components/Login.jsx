import React, { useState } from 'react';
import { Grid, Paper, TextField, Button, Typography, Link, IconButton, Modal, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = ({ open, onClose }) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [error, setError] = useState(null);
    const [login, { data }] = useMutation(LOGIN);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // Validate email format
        if (!isValidEmail(formState.email)) {
            setError('Invalid email address');
            return;
        }
        try {
            const { data } = await login({
                variables: { ...formState },
            });
            Auth.login(data.login.token);
        } catch (error) {
            console.error(error);
            setError('Invalid credentials');
        }
        setFormState({
            email: '',
            password: '',
        });
    };

    const isValidEmail = (email) => {
        // Basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const clearError = () => {
        setError(null);
    };

    const paperStyle = {
        padding: 20,
        width: 400,
        margin: '20px auto',
        position: 'relative',
        overflow: 'auto',
        borderRadius: '20px',
        backgroundColor: 'rgba(33, 33, 33, 0.9)',
    };

    const btnStyle = {
        margin: '16px 0',
        backgroundColor: '#5D3FD3',
        color: 'white',
        '&:hover': {
            backgroundColor: '#3f2ea8'
        }
    };

    const textFieldStyle = {
        marginBottom: '16px',
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#fff',
            },
            '&:hover fieldset': {
                borderColor: '#5D3FD3',
            },
        },
        '& .MuiInputLabel-root': {
            color: '#fff',
        },
        '& .MuiInputBase-input': {
            color: '#fff',
        }
    };

    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#5D3FD3',
            },
            secondary: {
                main: '#eb7e95',
            },
        },
        typography: {
            fontFamily: 'Roboto, sans-serif',
            h5: {
                fontWeight: 600,
            },
            body1: {
                fontSize: '1rem',
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            <Modal open={open} onClose={onClose}>
                <form onSubmit={handleFormSubmit}>
                    <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
                        <Paper elevation={10} style={paperStyle}>
                            <IconButton
                                onClick={onClose}
                                style={{ position: 'absolute', right: '8px', top: '8px', color: 'white' }}
                            >
                                <CloseIcon />
                            </IconButton>
                            <Grid align="center">
                                <Typography variant="h5" sx={{ color: 'white', margin: '16px 0' }}>
                                    Log In
                                </Typography>
                            </Grid>
                            <TextField
                                label="Email"
                                name="email"
                                placeholder="Enter Email"
                                variant="outlined"
                                fullWidth
                                required
                                sx={textFieldStyle}
                                onChange={handleChange}
                                error={Boolean(error)}
                                helperText={error}
                                onFocus={clearError}
                            />
                            <TextField
                                label="Password"
                                name="password"
                                placeholder="Enter Password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                sx={textFieldStyle}
                                onChange={handleChange}
                            />
                            <Button type="submit" variant="contained" sx={btnStyle} fullWidth>
                                Log in
                            </Button>
                            <Typography sx={{ color: 'white', marginTop: '16px' }}>
                                Don't have an account?&nbsp;
                                <Link component={RouterLink} to="/signup" onClick={onClose} sx={{ color: '#eb7e95', textDecoration: 'none' }}>
                                    Sign Up
                                </Link>
                            </Typography>
                        </Paper>
                    </Grid>
                </form>
            </Modal>
        </ThemeProvider>
    );
};

export default Login;
