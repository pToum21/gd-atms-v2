import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { outlinedInputClasses } from '@mui/material/OutlinedInput';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
import { useState } from 'react';
import Auth from '../utils/auth';

export default function SignUp() {
  const [formState, setFormstate] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [formValid, setFormValid] = useState(true);
  const [createUser, { error, data }] = useMutation(CREATE_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormstate({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formState.username || !formState.email || !formState.password) {
      setFormValid(false);
      return;
    }

    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(formState.username)) {
      setFormValid(false);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formState.email)) {
      setFormValid(false);
      return;
    }

    // 8 characters, one lowercase, one uppercase, and one digit 
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(formState.password)) {
      setFormValid(false);
      return;
    }

    try {
      const { data } = await createUser({
        variables: { ...formState },
      });
      Auth.login(data.createUser.token);
    } catch (error) {
      console.log(error);
    }
  };

  const theme = createTheme({
    palette: {
      type: 'light', // Light mode
      primary: {
        main: '#eb7e95', // Red color for button
      },
      text: {
        primary: '#FFFFFF', // White text color
      },
    },
  });

  const customTheme = createTheme({
    palette: {
      type: 'light', // Light mode
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiInputLabel-root': {
              color: '#eb7e95', // Red label color
            },
            '& .MuiOutlinedInput-input': {
              color: '#FFFFFF', // White text color for input
            },
            '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: '#FFFFFF', // White border color for input outline
            },
            '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
              borderColor: '#eb7e95', // Red border color for input outline on hover
            },
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" sx={{height: '84vh', maxWidth: '70%', }}>
        <Box sx={{ mt: 8, mx: 'auto', bgcolor: '#000000', p: 3, borderRadius: 4, boxShadow: '10px 40px 50px rgba(0, 0, 0, 6)' }}>
          <Typography component="h1" variant="h5" align="center" color="white">
            Sign up
          </Typography>
          {error && (
            <Typography variant="body1" color="error" align="center">
              {error.message || error.toString()}
            </Typography>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2} mt={2}>
              <ThemeProvider theme={customTheme}>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="username"
                    label="User Name"
                    name="username"
                    autoComplete="username"
                    value={formState.username}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                </Grid>
              </ThemeProvider>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 2 }}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
