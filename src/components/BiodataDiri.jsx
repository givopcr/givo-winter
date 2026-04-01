import React from 'react';
import '../styles/custom.css';
import ProfileImage from './ProfileImage';
import PersonalInfo from './PersonalInfo';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';
import ClassInfo from './ClassInfo';
import StudentIdInfo from './StudentIdInfo';

const BiodataDiri = () => {
  const userData = {
    name: "Givo Fadlillah",
    email: "givo24si@mahasiswa.pcr.ac.id",
    address: "Jl. Padat Karya",
    className: "2 SI C",
    major: "Sistem Informasi",
    nim: "2457301063"
  };

  return (
    <div className="biodata-container">
      <div className="biodata-card">
        <div className="biodata-header">
          <h1>Biodata Diri Mahasiswa</h1>
          <p>Portofolio Mahasiswa Sistem Informasi</p>
        </div>
        
        <div className="biodata-content">
          <ProfileImage />
          <PersonalInfo userData={userData} />
          <ContactInfo userData={userData} />
          <EducationInfo userData={userData} />
          <ClassInfo userData={userData} />
          <StudentIdInfo userData={userData} />
        </div>
      </div>
    </div>
  );
};

export default BiodataDiri;