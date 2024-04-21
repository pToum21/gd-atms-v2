import React from 'react';
import { Typography, Grid, Box } from '@mui/material';

const PrivacyPolicy = () => {
    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontSize: '2.5rem' }}> Privacy Policy</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box bgcolor="black" boxShadow={3} p={3} borderRadius={4}>
                        <Typography variant="body1" paragraph color="white">
                            Privacy Policy
                            GDATMs we operate the GDATM website.

                            This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.

                            We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            Information Collection and Use
                            We collect several different types of information for various purposes to provide and improve our Service to you.
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            Fusce dapibus, ipsum eu commodo consectetur, lorem dolor vestibulum justo, nec pharetra odio libero non nunc. Vivamus nec lectus vitae odio lobortis ultrices. Integer consectetur tellus nec risus luctus, vel fringilla odio mattis. Donec non nunc vehicula, malesuada eros ut, congue urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum scelerisque urna a dictum pretium. Nulla ac ultricies risus, a tempus orci. Morbi ac dui vel arcu malesuada consectetur. In hac habitasse platea dictumst.
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            Etiam at nulla et lectus sodales consectetur. Sed vel lectus lorem. Nullam nec eros et elit finibus scelerisque. Nullam non aliquam orci, in ullamcorper metus. Aenean et erat et nunc laoreet convallis. Phasellus vel lectus vel leo vehicula tincidunt. Morbi sodales turpis non felis maximus, vitae ultricies arcu bibendum. Mauris non felis vestibulum, consequat enim eget, tempus enim.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default PrivacyPolicy;
