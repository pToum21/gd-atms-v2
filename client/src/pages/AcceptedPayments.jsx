import React from 'react';
import { Grid, Paper } from '@mui/material';
// Import credit card logos
import twoCheckout from '/images/card-icons/2checkout-curved-64px.png';
import americanExpress from '/images/card-icons/american-express-curved-64px.png';
import cirrus from '/images/card-icons/cirrus-curved-64px.png';
import delta from '/images/card-icons/delta-curved-64px.png';
import directDebit from '/images/card-icons/direct-debit-curved-64px.png';
import discover from '/images/card-icons/discover-curved-64px.png';
import ebay from '/images/card-icons/ebay-curved-64px.png';
import googleCheckout from '/images/card-icons/google-checkout-curved-64px.png';
import maestro from '/images/card-icons/maestro-curved-64px.png';
import mastercard from '/images/card-icons/mastercard-curved-64px.png';
import moneybookers from '/images/card-icons/moneybookers-curved-64px.png';
import paypal from '/images/card-icons/paypal-curved-64px.png';
import sagePay from '/images/card-icons/sagepay-curved-64px.png';
import solo from '/images/card-icons/solo-curved-64px.png';
import visa from '/images/card-icons/visa-curved-64px.png';
import visaElectron from '/images/card-icons/visa-electron-curved-64px.png';
import westernUnion from '/images/card-icons/western-union-curved-64px.png';
import EBT from '/images/card-icons/16777460562579.jpg';

const AcceptedPayments = () => {
    // Array of credit card logo paths
    const cardLogos = [
        twoCheckout,
        americanExpress,
        cirrus,
        delta,
        directDebit,
        discover,
        ebay,
        googleCheckout,
        maestro,
        mastercard,
        moneybookers,
        paypal,
        sagePay,
        solo,
        visa,
        visaElectron,
        westernUnion,
        EBT
    ];

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', height: '90vh', marginTop: '15vh' }}>
            <Paper style={{ backgroundColor: 'black', boxShadow: '10px 40px 50px rgba(0, 0, 0, 6)', width: '85vw', height: '70vh', overflowY: 'auto', borderRadius: '30px' }}>
                <div style={{ padding: '20px', textAlign: 'center' }}>
                    <h1 style={{ color: 'white' }}>Accepted Payments</h1>

                    <p style={{ color: 'white' }}>
                        GD ATMs accept all major credit cards at all locations. You can use your Visa, Mastercard, American Express, or Discover card to withdraw cash or check your bank balance at any GD ATM.
                    </p>
                    <p style={{ color: 'white' }}>
                        In addition to withdrawing cash, GD ATMs also provide the convenience of checking your bank balance directly from the ATM interface.
                    </p>

                    {/* Grid container for credit card logos */}
                    <Grid container spacing={2} justifyContent="center">
                        {cardLogos.map((logo, index) => (
                            <Grid item xs={6} sm={4} md={2} key={index}>
                                <img src={logo} alt={`Card Logo ${index}`} style={{ maxWidth: '100%', height: 'auto', borderRadius: '10px' }} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Paper>
        </div>
    );
};

export default AcceptedPayments;
