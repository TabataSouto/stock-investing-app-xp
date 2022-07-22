import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import Style from './Style';

function Footer() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/financial-transaction');
  };

  return (
    <Style.FooterContainer>
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
    </Style.FooterContainer>
  );
}

export default Footer;
