import React from 'react';
import '../styles/welcome.css';

const WelcomePage = () => {
  return (
    <div>
      <h2 className="welcome-title" style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>Customer Centric Atm</h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h3 className="welcome-title" style={{ margin: '0' }}>Providers</h3>
      </div>
    </div>
  );
};

export default WelcomePage;

