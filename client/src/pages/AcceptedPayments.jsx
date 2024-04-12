import React from 'react';
// all below are imports of credit card logos
import twoCheckout from '../../public/images/card-icons/2checkout-curved-64px.png'
import americanExpress from '../../public/images/card-icons/american-express-curved-64px.png'
import cirrus from '../../public/images/card-icons/cirrus-curved-64px.png'
import delta from '../../public/images/card-icons/delta-curved-64px.png'
import directDebit from '../../public/images/card-icons/direct-debit-curved-64px.png'
import discover from '../../public/images/card-icons/discover-curved-64px.png'
import ebay from '../../public/images/card-icons/ebay-curved-64px.png'
import googleCheckout from '../../public/images/card-icons/google-checkout-curved-64px.png'
import maestro from '../../public/images/card-icons/maestro-curved-64px.png'
import mastercard from '../../public/images/card-icons/mastercard-curved-64px.png'
import moneybookers from '../../public/images/card-icons/moneybookers-curved-64px.png'
import paypal from '../../public/images/card-icons/paypal-curved-64px.png'
import sagePay from '/images/card-icons/sagepay-curved-64px.png'
import solo from '/images/card-icons/solo-curved-64px.png'
import visa from '/images/card-icons/visa-curved-64px.png'
import visaElectron from '/images/card-icons/visa-electron-curved-64px.png'
import westernUnion from '/images/card-icons/western-union-curved-64px.png'

const AcceptedPayments = () => {
    // credit card icons

    return (
        <div style={{height: '90vh'}}>
            <h1>Accepted Payments</h1>
            
            <p>
                GD ATMs accept all major credit cards at all locations. You can use your Visa, Mastercard, American Express, or Discover card to withdraw cash or check your bank balance at any GD ATM.
            </p>
            <p>
                In addition to withdrawing cash, GD ATMs also provide the convenience of checking your bank balance directly from the ATM interface.
            </p>
        </div>
    );
};

export default AcceptedPayments;
