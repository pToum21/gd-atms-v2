import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { TextField, InputAdornment, Button, Typography, Container, Box, Paper } from '@mui/material';

function Contact() {
  const [state, handleSubmit] = useForm("xpzvworp");
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  if (state.succeeded) {
    return (
      <Container sx={{ backgroundColor: '#000', color: '#fff', padding: '16px' }}>
        <Typography variant="h4" gutterBottom>Thanks for contacting me! You will hear back shortly. 🙏</Typography>
      </Container>
    );
  }

  useEffect(() => {
    // Scroll to the top of the page when component is mounted
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ marginTop: '15%' }}>
      <Container sx={{ backgroundColor: 'rgb(72, 73, 75)', color: '#fff', padding: '16px', borderRadius: '30px', width: '95vw', boxShadow: '10px 40px 50px rgba(0, 0, 0, 0.6)', marginBottom: '10%' }}>
        <Typography variant="h3" sx={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2%' }} className="contact-me-header">Contact</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            name="username"
            label="Name/Company Name"
            value={formData.username}
            onChange={handleChange}
            required
            sx={{
              marginBottom: '24px',
              '& .MuiInputBase-input': { color: '#fff' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#5D3FD3' },
              '& .MuiFormLabel-root': { color: '#fff' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#fff' },
            }}
            InputProps={{
              sx: { color: '#fff' }
            }}
            variant="outlined"
          />

          <TextField
            fullWidth
            type="email"
            name="email"
            label="Email"
            value={formData.email}
            onChange={handleChange}
            required
            sx={{
              marginBottom: '24px',
              '& .MuiInputBase-input': { color: '#fff' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#5D3FD3' },
              '& .MuiFormLabel-root': { color: '#fff' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#fff' },
            }}
            InputProps={{
              endAdornment: <InputAdornment position="end">@example.com</InputAdornment>,
              sx: { color: '#fff' }
            }}
            variant="outlined"
          />

          <TextField
            fullWidth
            multiline
            rows={4}
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            required
            sx={{
              marginBottom: '24px',
              '& .MuiInputBase-input': { color: '#fff' },
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#5D3FD3' },
              '& .MuiFormLabel-root': { color: '#fff' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#fff' },
            }}
            InputProps={{
              sx: { color: '#fff' }
            }}
            variant="outlined"
          />

          <Box mt={2}>
            <Button type="submit" disabled={state.submitting} sx={{ backgroundColor: '#5D3FD3', width: '100%', color: '#fff' }}>Send</Button>
          </Box>
        </form>

        {/* Contact info area */}
        <Paper elevation={3} sx={{ backgroundColor: '#333', color: '#fff', padding: '16px', borderRadius: '15px', marginTop: '24px' }}>
          <Typography variant="h5" sx={{ marginBottom: '12px' }} className='contact-me-information'>Contact Information:</Typography>
          <Typography variant="h6" sx={{ marginBottom: '6px' }} className='con-info-titles'>Location</Typography>
          <Typography sx={{ marginBottom: '12px' }}>Los Angeles, CA</Typography>
          <Typography variant="h6" sx={{ marginBottom: '6px' }} className='con-info-titles'>Email</Typography>
          <Typography sx={{ marginBottom: '12px' }}>gravediggeratms@gmail.com</Typography>
          <Typography variant="h6" sx={{ marginBottom: '6px' }} className='con-info-titles'>Phone</Typography>
          <Typography>(240) 449-5594</Typography>
        </Paper>
      </Container>
    </div>
  );
}

export default Contact;
