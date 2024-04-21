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
                            Our privacy policy goes here...
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum orci vel dolor consequat, eu rutrum libero volutpat. Ut vel pharetra turpis. Nullam luctus leo a libero accumsan, sit amet sodales ligula vehicula. Integer nec quam eget elit congue auctor sit amet et est. Nullam ullamcorper augue ut metus molestie, ac mattis magna vestibulum. Proin bibendum, tortor id maximus fermentum, orci nisl scelerisque libero, id rhoncus ex eros at magna. Integer nec tristique neque, vel tempor magna. Fusce sed nunc diam. Cras tempor leo id erat maximus, nec vestibulum libero feugiat. Mauris id dapibus urna.
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
