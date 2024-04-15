import { useState } from 'react';
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

  return (
    <Container sx={{ backgroundColor: 'white', color: '#fff', padding: '16px' }}>
      <Typography variant="h3" className="contact-me-header">Contact Me</Typography>
      <Typography variant="h4" className="form-title">Don't be shy, hit my line 👇</Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          name="username"
          label="Name/Company Name"
          value={formData.username}
          onChange={handleChange}
          required
          sx={{ marginBottom: '24px', '& .MuiInputBase-root': { color: '#fff' } }}
        />

        <TextField
          fullWidth
          type="email"
          name="email"
          label="Email"
          value={formData.email}
          onChange={handleChange}
          required
          sx={{ marginBottom: '24px', '& .MuiInputBase-root': { color: '#fff' } }}
          InputProps={{
            endAdornment: <InputAdornment position="end">@example.com</InputAdornment>,
          }}
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
          sx={{ marginBottom: '24px', '& .MuiInputBase-root': { color: '#fff' } }}
        />

        <Box mt={2}>
          <Button type="submit" disabled={state.submitting}>Send</Button>
        </Box>
      </form>

      {/* Contact info area */}
      <div className="contact-info">
        <Typography variant="h5" className='contact-me-information'>Contact Information:</Typography>
        <Typography variant="h6" className='con-info-titles'>Address</Typography>
        <Typography>Los Angeles, CA</Typography>
        <Typography variant="subtitle1" className='con-info-titles'>Email</Typography>
        <Typography>pey2moo1@gmail.com</Typography>
        <Typography variant="subtitle2" className='con-info-titles'>Phone</Typography>
        <Typography>(240) 449-5594</Typography>
      </div>
    </Container>
  );
}

export default Contact;
