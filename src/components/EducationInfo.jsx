import React from 'react';

const EducationInfo = ({ userData }) => {
  return (
    <div className="education-info">
      <h2 className="section-title">
        <span className="icon">🎓</span>
        Informasi Pendidikan
      </h2>
      <div className="info-grid">
        <div className="info-item">
          <label>Jurusan:</label>
          <p>{userData.major}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;