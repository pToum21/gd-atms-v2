import React, { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useMutation } from '@apollo/client';
import { CREATE_USER } from '../utils/mutations';
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
      mode: 'light',
      primary: {
        main: '#5D3FD3',
      },
      secondary: {
        main: '#eb7e95',
      },
      text: {
        primary: '#FFFFFF',
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

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" sx={{ height: '100vh', display: 'flex', alignItems: 'center' }}>
        <Box
          sx={{
            mt: 8,
            mx: 'auto',
            bgcolor: 'rgba(33, 33, 33, 0.9)',
            p: 4,
            borderRadius: 4,
            boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.1)',
            maxWidth: '400px',
            width: '100%'
          }}
        >
          <Typography component="h1" variant="h5" align="center" color="white" sx={{ mb: 2 }}>
            Sign Up
          </Typography>
          {error && (
            <Typography variant="body1" color="error" align="center" sx={{ mb: 2 }}>
              {error.message || error.toString()}
            </Typography>
          )}
          <form onSubmit={handleSubmit} noValidate>
            <Grid container spacing={2}>
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
                  sx={textFieldStyle}
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
                  sx={textFieldStyle}
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
                  sx={textFieldStyle}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2, bgcolor: '#5D3FD3', '&:hover': { bgcolor: '#3f2ea8' } }}
            >
              Sign Up
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
