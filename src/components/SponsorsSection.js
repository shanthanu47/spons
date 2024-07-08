import React from 'react';
import './SponsorsSection.css';

function SponsorsSection() {
  const handleContactClick = () => {
    alert('Contact us form coming soon!');
  };

  return (
    <section className="sponsors-section">
      <div className="image-placeholder">Image</div>
      <h2>Sponsors</h2>
      <div className="description">Description</div>
      <div className="contact">
        <p>Interested in collaborating with us? Get in touch with us!</p>
        <button onClick={handleContactClick}>CONTACT US</button>
      </div>
      <div className="partners">
        <div className="partner media-partner">MEDIA PARTNER</div>
        <div className="partner food-partner">FOOD PARTNER</div>
        <div className="partner finance-partner">FINANCE PARTNER</div>
        <div className="partner education-partner">EDUCATION PARTNER</div>
      </div>
    </section>
  );
}

export default SponsorsSection;
