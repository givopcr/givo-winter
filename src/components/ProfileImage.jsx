import React from 'react';

/**
 * ProfileImage
 * Menampilkan foto profil mahasiswa dengan badge status "Aktif"
 * dan blok nama + NIM di sebelahnya, menyatu dengan header hitam.
 * 
 * Props:
 *  - userData: { name, nim }
 *  - imageSrc: URL foto (opsional, default ke placeholder)
 */
const ProfileImage = ({ userData = {}, imageSrc }) => {
  const { name = 'Nama Mahasiswa', nim = '-' } = userData;
  const src = imageSrc || `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=FF5F1F&color=fff&size=200&bold=true`;

  return (
    <>
      {/* Strip foto + nama (background hitam, menyatu dengan header) */}
      <div className="profile-image-container">
        <div className="profile-image-wrapper">
          <img
            src={src}
            alt={`Foto profil ${name}`}
            className="profile-image"
          />
          <div className="profile-overlay">Aktif</div>
        </div>

        <div className="profile-name-block">
          <div className="profile-name">{name}</div>
          <span className="profile-nim-tag">NIM · {nim}</span>
        </div>
      </div>

      {/* Curve divider: hitam → putih */}
      <div className="curve-divider" aria-hidden="true" />
    </>
  );
};

export default ProfileImage;