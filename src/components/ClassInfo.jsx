import React from 'react';

const ClassInfo = ({ userData }) => {
  return (
    <div className="class-info">
      <h2 className="section-title">
        <span className="icon">🏫</span>
        Informasi Kelas
      </h2>
      <div className="info-grid">
        <div className="info-item">
          <label>Kelas:</label>
          <p>{userData.className}</p>
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;