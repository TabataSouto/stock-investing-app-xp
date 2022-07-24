import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import Input from '../Input';
import loginValidation from '../../helpers/login.validation';
import { userLogin } from '../../redux/reducers/loginSlice';
import storage from '../../helpers/storage';
import Style from './Style';
import security from '../../images/security.svg';
import currentDate from '../../helpers/currentDate';

function Form() {
  const [login, setLogin] = useState({ email: '', password: '' });
  const [isDidabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsDisabled(loginValidation(login));
  }, [login]);

  const handleChange = ({ target: { name, value } }) => {
    setLogin({ ...login, [name]: value });
  };

  const handleClick = () => {
    dispatch(userLogin(login));
    storage.setUser({ email: login.email, date: currentDate() });
  };

  return (
    <Style.FormContainer>
      <Style.DivForm>
        <img src={security} alt="icone cadeado" />
        <p>Ambiente Seguro</p>
      </Style.DivForm>
      <Style.Form>
        <Input
          title=""
          id="email-input"
          type="text"
          name="email"
          value={login.email}
          placeholder="E-mail"
          onChange={handleChange}
          disabled={false}
          max={100}
        />
        <Input
          title=""
          id="password-input"
          type="password"
          name="password"
          value={login.password}
          placeholder="Senha"
          onChange={handleChange}
          disabled={false}
          max={100}
        />
        <Button
          name="logar"
          onClick={handleClick}
          disabled={isDidabled}
          title="Entrar"
        />
      </Style.Form>
    </Style.FormContainer>
  );
}

export default Form;
