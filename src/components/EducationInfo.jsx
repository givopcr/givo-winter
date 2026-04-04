import React from 'react';

/**
 * EducationInfo
 * Menampilkan informasi pendidikan mahasiswa.
 *
 * Props:
 *  - userData: { major, institution }
 */
const EducationInfo = ({ userData = {} }) => {
  const {
    major       = '-',
    institution = 'Politeknik Caltex Riau',
  } = userData;

  return (
    <div className="education-info">
      <h2 className="section-title">
        <span className="icon-wrap" aria-hidden="true">🎓</span>
        <span className="title-text">Informasi Pendidikan</span>
      </h2>

      <div className="info-grid">
        <div className="info-item">
          <label>Program Studi</label>
          <p>{major}</p>
        </div>
        <div className="info-item">
          <label>Institusi</label>
          <p>{institution}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationInfo;