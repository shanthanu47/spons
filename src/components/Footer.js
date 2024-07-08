import React from 'react';
import './Footer.css';

function Footer() {
  const handleAboutClick = () => {
    alert('About excel section coming soon!');
  };

  const handleContactInfoClick = () => {
    alert('Contact information coming soon!');
  };

  return (
    <footer className="footer">
      <button onClick={handleAboutClick}>About excel</button>
      <button onClick={handleContactInfoClick}>Contact us info</button>
    </footer>
  );
}

export default Footer;
