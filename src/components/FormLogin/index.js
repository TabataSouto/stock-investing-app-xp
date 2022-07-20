import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../Button';
import Input from '../Input';

import loginValidation from '../../helpers/login.validation';
import { userLogin } from '../../redux/reducers/loginSlice';
import storage from '../../helpers/storage';

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
    storage.setUser(login);
  };

  return (
    <form>
      <Input
        id="email-input"
        type="text"
        name="email"
        value={login.email}
        placeholder="E-mail"
        onChange={handleChange}
        disabled={false}
      />
      <Input
        id="password-input"
        type="password"
        name="password"
        value={login.password}
        placeholder="password"
        onChange={handleChange}
        disabled={false}
      />
      <Button
        name="logar"
        onClick={handleClick}
        disabled={isDidabled}
        title="Entrar"
      />
    </form>
  );
}

export default Form;
