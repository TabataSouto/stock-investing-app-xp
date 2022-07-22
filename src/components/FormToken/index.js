import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import tokenValidation from '../../helpers/token.validation';
import Button from '../Button';
import Input from '../Input';
import Style from '../FormLogin/Style';
import security from '../../images/security.svg';

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
    <Style.FormContainer>
      <Style.Form>
        <Style.DivForm>
          <img src={security} alt="icone cadeado" />
          <p>Ambiente Seguro</p>
        </Style.DivForm>
        <Style.DivToken>
          <p>
            Olá
            {' '}
            <span>{user}</span>
          </p>
          <p>Digite seu XP Token:</p>
        </Style.DivToken>
        <Input
          title=""
          id="token-validation"
          type="text"
          name="token"
          placeholder=""
          value={token}
          onChange={handleChange}
          disabled={false}
          max={100}
        />
        <Button
          name="token-validation"
          disabled={isDidabled}
          onClick={() => navigate('/assets')}
          title="Validar"
        />
      </Style.Form>
    </Style.FormContainer>
  );
}

export default Token;
