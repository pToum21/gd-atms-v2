import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import atmig1 from '/images/100630-F-5759C-111.jfif';
import atmig2 from '/images/210305-usingatm-stock.jpg';

const About = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontSize: '2.5rem' }}> About Us</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Box bgcolor="black" boxShadow={3} p={3} borderRadius={4} height="100%">
                        <Typography variant="body1" paragraph color="white">
                            Welcome to [Your Company Name], a trusted provider of ATM solutions with a network of seven locations across [Your Region/Country]. At [Your Company Name], we specialize in providing top-of-the-line ATM machines tailored to meet the diverse needs of businesses and communities.
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            With years of experience in the industry, we understand the importance of seamless transactions and reliable service. That's why our team is dedicated to delivering cutting-edge ATM technology coupled with exceptional customer support.
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            Whether you're a small business looking to enhance customer convenience or a financial institution seeking to expand your ATM network, we have the expertise and resources to meet your requirements. Our customizable solutions ensure that you get the right ATM solution for your specific needs.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box bgcolor="black" boxShadow={3} p={3} borderRadius={4} height="100%">
                        <Typography variant="h6" gutterBottom color="white">Why Choose Us?</Typography>
                        <ul style={{ color: 'white' }}>
                            <li>Wide Range of ATM Machines</li>
                            <li>Expert Consultation</li>
                            <li>Seamless Installation and Maintenance</li>
                            <li>24/7 Customer Support</li>
                            <li>Competitive Pricing</li>
                        </ul>
                        <Typography variant="h6" gutterBottom color="white">Contact Us</Typography>
                        <Typography variant="body1" color="white">
                            For inquiries about our products and services, or to schedule a consultation, please contact us at:
                        </Typography>
                        <Typography variant="body1" color="white" style={{ marginTop: '10px' }}>
                            [Your Contact Information]
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            {/* Image placeholders */}
            <Grid container justifyContent="center" mt={5}>
                <Grid item xs={12} md={6}>
                    {/* Image Placeholder 1 */}
                    <img src={atmig2} alt="ATM" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                </Grid>
                <Grid item xs={12} md={6}>
                    {/* Image Placeholder 2 */}
                    <img src={atmig1} alt="ATM" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
