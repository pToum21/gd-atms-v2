import React from 'react';
import { Typography, Grid } from '@mui/material';

const About = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom>About Us</Typography>
            <Typography variant="body1" paragraph>
                Welcome to [Your Company Name], a trusted provider of ATM solutions with a network of seven locations across [Your Region/Country]. At [Your Company Name], we specialize in providing top-of-the-line ATM machines tailored to meet the diverse needs of businesses and communities.
            </Typography>
            <Typography variant="body1" paragraph>
                With years of experience in the industry, we understand the importance of seamless transactions and reliable service. That's why our team is dedicated to delivering cutting-edge ATM technology coupled with exceptional customer support.
            </Typography>
            <Typography variant="body1" paragraph>
                Whether you're a small business looking to enhance customer convenience or a financial institution seeking to expand your ATM network, we have the expertise and resources to meet your requirements. Our customizable solutions ensure that you get the right ATM solution for your specific needs.
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Why Choose Us?</Typography>
                    <ul>
                        <li>Wide Range of ATM Machines</li>
                        <li>Expert Consultation</li>
                        <li>Seamless Installation and Maintenance</li>
                        <li>24/7 Customer Support</li>
                        <li>Competitive Pricing</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h6" gutterBottom>Contact Us</Typography>
                    <Typography variant="body1">
                        For inquiries about our products and services, or to schedule a consultation, please contact us at:
                    </Typography>
                    <Typography variant="body1" style={{ marginTop: '10px' }}>
                        [Your Contact Information]
                    </Typography>
                </Grid>
            </Grid>
        </div>
    );
}

export default About;
