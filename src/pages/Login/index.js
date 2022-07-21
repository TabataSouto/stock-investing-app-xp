import React from 'react';
import { useSelector } from 'react-redux';

import FormLogin from '../../components/FormLogin';
import FormToken from '../../components/FormToken';

function Login() {
  const loginDone = useSelector((state) => state.login);

  return (
    <section>
      <main>
        {
          !loginDone.email && !loginDone.password
            ? <FormLogin />
            : <FormToken />
        }
      </main>
    </section>
  );
}

export default Login;
