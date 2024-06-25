import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { useEffect } from 'react';

const PrivacyPolicy = () => {

    useEffect(() => {
        // Scroll to the top of the page when component is mounted
        window.scrollTo(0, 0);
    }, []);


    return (
        <div style={{ padding: '20px' }}>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', fontSize: '2.5rem' }}> Privacy Policy</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Box bgcolor="black" boxShadow={3} p={3} borderRadius={4} sx={{ marginBottom: '20px' }}>
                        <Typography variant="body1" paragraph color="white">
                            <h1>GDATMs we operate the GDATM website.</h1>
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            <p>This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>
                        </Typography>
                    </Box>
                    <Box bgcolor="black" boxShadow={3} p={3} borderRadius={4} sx={{ marginBottom: '20px' }}>
                        <Typography variant="body1" paragraph color="white">
                            <h1>Information Collection and Use</h1>
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>
                        </Typography>
                    </Box>
                    <Box bgcolor="black" boxShadow={3} p={3} borderRadius={4} sx={{ marginBottom: '20px' }}>
                        <Typography variant="body1" paragraph color="white">
                            <h1>Types of Data Collected</h1>
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            <h2>Personal Data</h2>
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            <p>While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). Personally identifiable information may include, but is not limited to:</p>
                            <p>- Email address</p>
                            <p>- First name and last name</p>
                            <p>- Phone number</p>
                            <p>- Address, State, Province, ZIP/Postal code, City</p>
                        </Typography>
                    </Box>
                    <Box bgcolor="black" boxShadow={3} p={3} borderRadius={4} sx={{ marginBottom: '20px' }}>
                        <Typography variant="body1" paragraph color="white">
                            <h1>GA Demographics and Interests feature</h1>
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            <p>We are committed to ensuring that our website contains content that is valuable and useful to our visitors. To assist us in this, we have implemented the Google Analytics Demographics and Interests reporting features on our website. These tools allow us to review anonymous data regarding the gender, age and interests of website visitors and adapt our website content to better reflect their needs. Although this information is collected through your Google ad settings, it is not provided to us in a personally identifiable format. This means we cannot identify what information is about you, and we will not try to figure it out.

                                You may opt out of the DoubleClick cookie by visiting the Google advertising opt-out page [http://www.google.com/policies/technologies/ads/].</p>
                        </Typography>
                    </Box>
                    <Box bgcolor="black" boxShadow={3} p={3} borderRadius={4} sx={{ marginBottom: '20px' }}>
                        <Typography variant="body1" paragraph color="white">
                            <h1>What is a cookie and why do we use it?</h1>
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            <p>Cookies are text files containing small amounts of information which are downloaded to your device when you visit a website. Cookies are then sent back to the originating website on each subsequent visit, or to another website that recognizes that cookie. Cookies are useful because they allow a website to recognize a user’s device. Cookies do lots of different jobs, like letting you navigate between pages efficiently, remembering your preferences, and generally improve the user experience. They can also help to ensure that advertisements you see online are more relevant to you and your interests. </p>
                        </Typography>
                    </Box>
                    <Box bgcolor="black" boxShadow={3} p={3} borderRadius={4}>
                        <Typography variant="body1" paragraph color="white">
                            <h1>Opt out of cookies</h1>
                        </Typography>
                        <Typography variant="body1" paragraph color="white">
                            <p>You may opt out from cookies at any moment. You can set your browser to notify you when you receive a cookie, giving you the chance to decide whether or not to accept it.

                                However, some of the website functionalities could require cookies to work properly.</p>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default PrivacyPolicy;
