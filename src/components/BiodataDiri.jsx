import React, { useRef, useCallback } from 'react';
import '../styles/custom.css';

import ProfileImage   from './ProfileImage';
import PersonalInfo   from './PersonalInfo';
import ContactInfo    from './ContactInfo';
import EducationInfo  from './EducationInfo';
import ClassInfo      from './ClassInfo';
import StudentIdInfo  from './StudentIdInfo';

/**
 * BiodataDiri
 * Komponen utama portofolio mahasiswa.
 * Tema  : Orange × Hitam × Putih — Modern & Professional
 * Efek  : Gradient mesh background + 3D tilt + shimmer saat hover kartu
 *
 * Untuk mengganti data mahasiswa, cukup edit objek `userData` di bawah.
 * Untuk mengganti foto profil, isi `profileImageUrl` dengan URL / import lokal.
 */
const BiodataDiri = () => {
  /* ── Data Mahasiswa ─────────────────────────────── */
  const userData = {
    name:        'Givo Fadlillah',
    email:       'givo24si@mahasiswa.pcr.ac.id',
    address:     'Jl. Padat Karya',
    className:   '2 SI C',
    major:       'Sistem Informasi',
    institution: 'Politeknik Caltex Riau',
    nim:         '2457301063',
  };

  /**
   * URL foto profil.
   * Contoh lokal : import foto from '../assets/foto.jpg'; lalu profileImageUrl = foto
   * Contoh URL   : 'https://example.com/foto.jpg'
   * null          → otomatis avatar inisial warna orange
   */
  const profileImageUrl = null;

  /* ── 3D Tilt on hover ───────────────────────────── */
  const cardRef   = useRef(null);
  const rafRef    = useRef(null);
  const boundsRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    boundsRef.current = cardRef.current.getBoundingClientRect();
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (!boundsRef.current || !cardRef.current) return;
      const { left, top, width, height } = boundsRef.current;
      const x  = e.clientX - left;
      const y  = e.clientY - top;
      const rx =  ((y / height) - 0.5) * 10;
      const ry = ((0.5 - x / width))   * 10;
      cardRef.current.style.transform =
        `perspective(900px) rotateX(${rx}deg) rotateY(${-ry}deg) scale3d(1.015,1.015,1.015)`;
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (!cardRef.current) return;
    cardRef.current.style.transition =
      'box-shadow .35s cubic-bezier(.22,1,.36,1), transform .55s cubic-bezier(.22,1,.36,1)';
    cardRef.current.style.transform =
      'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.transition =
          'box-shadow .35s cubic-bezier(.22,1,.36,1), transform .35s cubic-bezier(.22,1,.36,1)';
      }
    }, 550);
  }, []);

  /* ── Render ─────────────────────────────────────── */
  return (
    <div className="biodata-container">
      <div
        className="biodata-card"
        ref={cardRef}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* ── Header ── */}
        <header className="biodata-header">
          <p className="header-eyebrow">Politeknik Caltex Riau</p>
          <h1>Biodata<br />Mahasiswa</h1>
          <p>Portofolio · Sistem Informasi</p>
        </header>

        {/* ── 6 Komponen Utama ── */}
        <div className="biodata-content">
          <ProfileImage userData={userData} imageSrc={profileImageUrl} />
          <PersonalInfo userData={userData} />
          <ContactInfo  userData={userData} />
          <EducationInfo userData={userData} />
          <ClassInfo    userData={userData} />
          <StudentIdInfo userData={userData} />
        </div>

        {/* ── Footer Bar ── */}
        <footer className="biodata-footer">
          <span className="footer-left">Politeknik Caltex Riau</span>
          <span className="footer-right">2024 / 2025</span>
        </footer>
      </div>
    </div>
  );
};

export default BiodataDiri;