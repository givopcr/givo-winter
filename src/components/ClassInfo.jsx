import React from 'react';

/**
 * ClassInfo
 * Menampilkan kelas aktif mahasiswa dengan badge pill hitam + dot orange.
 *
 * Props:
 *  - userData: { className }
 */
const ClassInfo = ({ userData = {} }) => {
  const { className = '-' } = userData;

  return (
    <div className="class-info">
      <h2 className="section-title">
        <span className="icon-wrap" aria-hidden="true">🏫</span>
        <span className="title-text">Informasi Kelas</span>
      </h2>

      <div className="class-badge-row">
        <span className="class-badge-label">Kelas Aktif</span>
        <div className="class-badge">
          <span className="pulse-dot" aria-hidden="true" />
          {className}
        </div>
      </div>
    </div>
  );
};

export default ClassInfo;