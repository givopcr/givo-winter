import React from 'react';

const PersonalInfo = ({ userData }) => {
  return (
    <div className="personal-info">
      <h2 className="section-title">
        <span className="icon">👤</span>
        Informasi Pribadi
      </h2>
      <div className="info-grid">
        <div className="info-item">
          <label>Nama Lengkap:</label>
          <p>{userData.name}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;