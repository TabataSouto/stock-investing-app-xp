import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/financial-transaction');
  };

  return (
    <footer>
      <Button
        name="deposit"
        disabled={false}
        onClick={handleClick}
        title="Depósito"
      />
      <Button
        name="rescue"
        disabled={false}
        onClick={handleClick}
        title="Retirada"
      />
    </footer>
  );
}

export default Footer;
