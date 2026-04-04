import React from 'react';

/**
 * PersonalInfo
 * Menampilkan informasi pribadi mahasiswa.
 *
 * Props:
 *  - userData: { name }
 */
const PersonalInfo = ({ userData = {} }) => {
  const { name = '-' } = userData;

  return (
    <div className="personal-info">
      <h2 className="section-title">
        <span className="icon-wrap" aria-hidden="true">👤</span>
        <span className="title-text">Informasi Pribadi</span>
      </h2>

      <div className="info-grid">
        <div className="info-item">
          <label>Nama Lengkap</label>
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;