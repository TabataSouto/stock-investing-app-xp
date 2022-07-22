import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import FormLogin from '../../components/FormLogin';
import FormToken from '../../components/FormToken';
import Style from './Style';

function Login() {
  const loginDone = useSelector((state) => state.login);

  return (
    <Style.LoginContainer>
      <Header />
      <Style.LoginMain>
        {
          !loginDone.email && !loginDone.password
            ? <FormLogin />
            : <FormToken />
        }
      </Style.LoginMain>
    </Style.LoginContainer>
  );
}

export default Login;
