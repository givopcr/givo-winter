import React from 'react';

const FormField = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  error,
  type = 'text',
  placeholder = '',
  options = null,
}) => {
  return (
    <div className="form-field">
      <label htmlFor={name} className="form-label">
        {label}
      </label>

      {options ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={`form-control ${error ? 'is-invalid' : ''}`}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          className={`form-control ${error ? 'is-invalid' : ''}`}
        />
      )}

      {error && (
        <p className="form-alert" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
