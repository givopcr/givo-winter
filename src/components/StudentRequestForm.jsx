import React, { useMemo, useState } from 'react';
import FormField from './FormField';

const initialFormData = {
  fullName: '',
  email: '',
  city: '',
  semester: '',
  purpose: '',
};

const semesterOptions = [
  { value: '', label: 'Pilih Semester' },
  { value: '2', label: 'Semester 2' },
  { value: '4', label: 'Semester 4' },
  { value: '6', label: 'Semester 6' },
];

const purposeOptions = [
  { value: '', label: 'Pilih Tujuan Form' },
  { value: 'konsultasi', label: 'Konsultasi Akademik' },
  { value: 'magang', label: 'Persiapan Magang' },
  { value: 'lomba', label: 'Pendaftaran Lomba' },
];

const validateField = (name, value) => {
  const trimmed = value.trim();

  if (name === 'fullName') {
    if (!trimmed) return 'Nama wajib diisi.';
    if (/\d/.test(trimmed)) return 'Nama tidak boleh mengandung angka.';
    if (trimmed.length < 3) return 'Nama minimal 3 karakter.';
    return '';
  }

  if (name === 'email') {
    if (!trimmed) return 'Email wajib diisi.';
    if (/\s/.test(value)) return 'Email tidak boleh mengandung spasi.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) return 'Format email tidak valid.';
    return '';
  }

  if (name === 'city') {
    if (!trimmed) return 'Asal kota wajib diisi.';
    if (/\d/.test(trimmed)) return 'Asal kota tidak boleh mengandung angka.';
    if (trimmed.length < 3) return 'Asal kota minimal 3 karakter.';
    return '';
  }

  if (name === 'semester' && !trimmed) return 'Semester harus dipilih.';
  if (name === 'purpose' && !trimmed) return 'Tujuan form harus dipilih.';

  return '';
};

const StudentRequestForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [touched, setTouched] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const errors = useMemo(() => {
    return {
      fullName: validateField('fullName', formData.fullName),
      email: validateField('email', formData.email),
      city: validateField('city', formData.city),
      semester: validateField('semester', formData.semester),
      purpose: validateField('purpose', formData.purpose),
    };
  }, [formData]);

  const isFormValid = Object.values(errors).every((error) => !error);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setSubmittedData(null);
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setTouched({
      fullName: true,
      email: true,
      city: true,
      semester: true,
      purpose: true,
    });

    if (!isFormValid) return;

    setSubmittedData({
      ...formData,
      response: `Terima kasih, ${formData.fullName}. Form dengan tujuan "${formData.purpose}" sudah valid dan siap diproses.`,
    });
  };

  return (
    <section className="student-form-section">
      <div className="student-form-card">
        <h2>Form Pengajuan Mahasiswa</h2>
        <p className="form-description">
          Isi form berikut sesuai kebutuhan pengajuan. Tombol submit akan muncul saat semua data valid.
        </p>

        <form onSubmit={handleSubmit} noValidate>
          <FormField
            label="Nama Lengkap"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.fullName ? errors.fullName : ''}
            placeholder="Contoh: Givo Fadlillah"
          />

          <FormField
            label="Email Aktif"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email ? errors.email : ''}
            placeholder="Contoh: givo@mail.com"
          />

          <FormField
            label="Asal Kota"
            name="city"
            value={formData.city}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.city ? errors.city : ''}
            placeholder="Contoh: Pekanbaru"
          />

          <FormField
            label="Semester"
            name="semester"
            value={formData.semester}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.semester ? errors.semester : ''}
            options={semesterOptions}
          />

          <FormField
            label="Tujuan Pengajuan"
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.purpose ? errors.purpose : ''}
            options={purposeOptions}
          />

          {isFormValid && (
            <button type="submit" className="submit-button">
              Submit Form
            </button>
          )}
        </form>

        {submittedData && (
          <div className="form-result">
            <h3>Hasil Input</h3>
            <p>{submittedData.response}</p>
            <ul>
              <li>Nama: {submittedData.fullName}</li>
              <li>Email: {submittedData.email}</li>
              <li>Asal Kota: {submittedData.city}</li>
              <li>Semester: {submittedData.semester}</li>
              <li>Tujuan: {submittedData.purpose}</li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default StudentRequestForm;
