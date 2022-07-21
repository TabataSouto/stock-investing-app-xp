import PropTypes from 'prop-types';
import React from 'react';

function Input({
  title,
  id,
  type,
  name,
  placeholder,
  value,
  onChange,
  disabled,
}) {
  return (
    <label htmlFor={id}>
      { title }
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        max="100"
        autoComplete="on"
        disabled={disabled}
      />
    </label>
  );
}

Input.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  disabled: PropTypes.bool.isRequired,
};

export default Input;
