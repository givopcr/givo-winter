import React from 'react';

/**
 * StudentIdInfo
 * Menampilkan NIM dalam highlight row gradient orange — elemen paling menonjol.
 *
 * Props:
 *  - userData: { nim }
 */
const StudentIdInfo = ({ userData = {} }) => {
  const { nim = '-' } = userData;

  return (
    <div className="student-id-info">
      <h2 className="section-title">
        <span className="icon-wrap" aria-hidden="true">🆔</span>
        <span className="title-text">Identitas Akademik</span>
      </h2>

      <div className="nim-highlight-row">
        <span className="nim-label">Nomor Induk Mahasiswa</span>
        <span className="nim-number">{nim}</span>
      </div>
    </div>
  );
};

export default StudentIdInfo;