import React from 'react';
import '../styles/welcome.css';

const WelcomePage = () => {
  return (
    <div>
      <p className="welcome-title" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>Customer Centric Atm</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p className="welcome-title" style={{ margin: '0' }}>Providers</p>
      </div>
    </div>
  );
};

export default WelcomePage;

