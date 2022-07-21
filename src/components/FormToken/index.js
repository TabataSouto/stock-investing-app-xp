import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import tokenValidation from '../../helpers/token.validation';

import Button from '../Button';
import Input from '../Input';

function Token() {
  const user = useSelector((state) => state.login.email);
  const navigate = useNavigate();

  const [isDidabled, setIsDisabled] = useState(true);
  const [token, setToken] = useState('');

  useEffect(() => {
    setIsDisabled(tokenValidation(token));
  }, [token]);

  const handleChange = ({ target: { value } }) => {
    setToken(value);
  };

  return (
    <main>
      <h1>{ `Olá, ${user}!`}</h1>
      <p>Difgite seu token:</p>
      <Input
        id="token-validation"
        type="text"
        name="token"
        placeholder=""
        value={token}
        onChange={handleChange}
        disabled={false}
      />
      <Button
        name="token-validation"
        disabled={isDidabled}
        onClick={() => navigate('/assets')}
        title="Validar"
      />
    </main>
  );
}

export default Token;
