import React from 'react';

const ContactInfo = ({ userData }) => {
  return (
    <div className="contact-info">
      <h2 className="section-title">
        <span className="icon">📧</span>
        Kontak & Alamat
      </h2>
      <div className="contact-list">
        <div className="contact-item">
          <div className="contact-left">
            <span className="contact-icon">📧</span>
            <span className="contact-label">Email</span>
          </div>
          <span className="contact-value">{userData.email}</span>
        </div>
        <div className="contact-item">
          <div className="contact-left">
            <span className="contact-icon">📍</span>
            <span className="contact-label">Alamat</span>
          </div>
          <span className="contact-value">{userData.address}</span>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;