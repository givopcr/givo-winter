import React from 'react';

const StudentIdInfo = ({ userData }) => {
  return (
    <div className="student-id-info">
      <h2 className="section-title">
        <span className="icon">🆔</span>
        Identitas Akademik
      </h2>
      <div className="info-grid">
        <div className="info-item">
          <label>NIM:</label>
          <p className="nim-number">{userData.nim}</p>
        </div>
      </div>
    </div>
  );
};

export default StudentIdInfo;