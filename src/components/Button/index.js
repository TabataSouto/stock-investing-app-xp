import PropTypes from 'prop-types';
import React from 'react';

function Button({
  name,
  disabled,
  onClick,
  title,
}) {
  return (
    <button
      type="button"
      name={name}
      disabled={disabled}
      onClick={onClick}
    >
      { title }
    </button>
  );
}

Button.propTypes = {
  disabled: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default Button;
