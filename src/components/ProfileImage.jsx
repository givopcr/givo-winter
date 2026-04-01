import React from 'react';

const ProfileImage = () => {
  return (
    <div className="profile-image-container">
      <div className="profile-image-wrapper">
        <img 
          src="https://via.placeholder.com/150" 
          alt="Profile" 
          className="profile-image"
        />
        <div className="profile-overlay">
          <span>Mahasiswa</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileImage;