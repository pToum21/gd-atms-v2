import React, { useState } from 'react';
import {
    Grid,
    Paper,
    Avatar,
    TextField,
    Button,
    Typography,
    Link,
    IconButton,
    Modal,
} from '@mui/material';
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
        height: '70vh',
        width: 370,
        margin: '20px auto',
        position: 'relative',
        overflow: 'auto',
        backgroundColor: 'rgb(72, 73, 75)',
        borderRadius: '30px',
    };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnStyle = { margin: '8px 0', backgroundColor: '#5D3FD3' };
    const textFieldStyle = { marginBottom: '16px', color: 'white' };

    const customTheme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#fff',
            },
            secondary: {
                main: '#eb7e95',
            },
        },
    });

    return (
        <Modal open={open} onClose={onClose}>
            <form onSubmit={handleFormSubmit} >
                <Grid container justifyContent="center" alignItems="center" style={{ height: '100vh' }}>
                    <Paper elevation={10} style={paperStyle}>
                        <IconButton
                            onClick={onClose}
                            style={{ position: 'absolute', right: '8px', top: '8px', zIndex: 1, color: 'white' }}
                        >
                            <CloseIcon color="action" className="close" sx={{ color: 'white' }} />
                        </IconButton>
                        <Grid align="center">
                            <Typography variant="h5" sx={{ color: 'white', margin: '8px 0' }}>
                                Log In
                            </Typography>
                        </Grid>
                        <ThemeProvider theme={customTheme}>
                            <TextField
                                label="Email"
                                name="email"
                                placeholder="Enter Email"
                                variant="outlined"
                                fullWidth
                                required
                                style={textFieldStyle}
                                onChange={handleChange}
                                error={Boolean(error)}
                                helperText={error}
                                onFocus={clearError}
                            />
                            <TextField
                                label="Password"
                                name="password"
                                placeholder="Enter password"
                                type="password"
                                variant="outlined"
                                fullWidth
                                required
                                style={textFieldStyle}
                                onChange={handleChange}
                            />
                        </ThemeProvider>
                        <Button type="submit" color="primary" variant="contained" style={btnStyle} fullWidth>
                            Log in
                        </Button>
                        <Typography sx={{ color: 'white' }}>
                            Do you have an account?&nbsp;
                            <Link component={RouterLink} to="/signup" onClick={onClose} sx={{ color: '#eb7e95', textDecoration: 'none' }}>
                                Sign Up
                            </Link>
                        </Typography>
                    </Paper>
                </Grid>
            </form>
        </Modal>
    );
};

export default Login;
