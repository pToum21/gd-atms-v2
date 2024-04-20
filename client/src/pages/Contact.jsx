import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';
import { TextField, InputAdornment, Button, Typography, Container, Box } from '@mui/material';

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
    <div style={{marginTop: '15%'}}>
      <Container sx={{ backgroundColor: '#000', color: '#fff', padding: '16px', borderRadius: '30px', width: '70vw', boxShadow: '10px 40px 50px rgba(0, 0, 0, 6)' }}>
        <Typography variant="h3" className="contact-me-header">Contact Us 👇</Typography>

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
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#eb7e95' },
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
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#eb7e95' },
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
              '& .MuiOutlinedInput-notchedOutline': { borderColor: '#eb7e95' },
              '& .MuiFormLabel-root': { color: '#fff' },
              '& .MuiInputLabel-root.Mui-focused': { color: '#fff' },
            }}
            InputProps={{
              sx: { color: '#fff' }
            }}
            variant="outlined"
          />

          <Box mt={2}>
            <Button type="submit" disabled={state.submitting} sx={{ backgroundColor: '#eb7e95', color: '#fff' }}>Send</Button>
          </Box>
        </form>

        {/* Contact info area */}
        <div className="contact-info">
          <Typography variant="h5" className='contact-me-information'>Contact Information:</Typography>
          <Typography variant="h6" className='con-info-titles'>Location</Typography>
          <Typography>Los Angeles, CA</Typography>
          <Typography variant="subtitle1" className='con-info-titles'>Email</Typography>
          <Typography>gravediggeratms@gmail.com</Typography>
          <Typography variant="subtitle2" className='con-info-titles'>Phone</Typography>
          <Typography>(240) 449-5594</Typography>
        </div>
      </Container>
    </div>

  );
}

export default Contact;
