import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import storage from '../../helpers/storage';
import { userLogin } from '../../redux/reducers/loginSlice';

function Header() {
  const dispatch = useDispatch();
  const loggedUser = useSelector((state) => state.login.email);

  useEffect(() => {
    const user = storage.getUser();
    dispatch(userLogin(user));
  });

  return (
    <header>
      <div>
        <p>
          {' '}
          { `Usuário: ${loggedUser}`}
          {' '}
        </p>
      </div>
    </header>
  );
}

export default Header;
