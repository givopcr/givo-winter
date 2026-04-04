import React from 'react';

/**
 * ContactInfo
 * Menampilkan kontak dan alamat dalam bentuk chip card.
 *
 * Props:
 *  - userData: { email, address }
 */
const ContactInfo = ({ userData = {} }) => {
  const { email = '-', address = '-' } = userData;

  const items = [
    { icon: '✉️', label: 'Email', value: email },
    { icon: '📍', label: 'Alamat', value: address },
  ];

  return (
    <div className="contact-info">
      <h2 className="section-title">
        <span className="icon-wrap" aria-hidden="true">📡</span>
        <span className="title-text">Kontak &amp; Alamat</span>
      </h2>

      <div className="contact-list">
        {items.map(({ icon, label, value }) => (
          <div className="contact-item" key={label}>
            <div className="contact-icon-box" aria-hidden="true">{icon}</div>
            <div className="contact-text-block">
              <span className="contact-label">{label}</span>
              <span className="contact-value">{value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;