import React from 'react';
import VisaIcon from './credit-card-icons/visa-icon.png'; 
import MastercardIcon from './credit-card-icons/mastercard-icon.png'; 
import AmexIcon from './credit-card-icons/amex-icon.png'; 
import DiscoverIcon from './credit-card-icons/discover-icon.png'; 

const AcceptedPayments = () => {
    const creditCardIcons = [
        { name: 'Visa', src: VisaIcon },
        { name: 'Mastercard', src: MastercardIcon },
        { name: 'American Express', src: AmexIcon },
        { name: 'Discover', src: DiscoverIcon },
        // Add more credit card icons here if needed
    ];

    return (
        <div>
            <h1>Accepted Payments</h1>
            <div>
                {/* Map through the imported credit card icons and display each one */}
                {creditCardIcons.map((icon, index) => (
                    <img
                        key={index}
                        src={icon.src}
                        alt={icon.name}
                    />
                ))}
            </div>
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
