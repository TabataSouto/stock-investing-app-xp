import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import storage from '../../helpers/storage';
import logo from '../../images/logo-xpi.svg';
import Style from './Style';

function Header() {
  const loggedUser = useSelector((state) => state.login.email);
  const [userStorage, setUserStorage] = useState('');

  useEffect(() => {
    const getStorage = storage.getUser();
    console.log(getStorage);
    if (getStorage !== null) {
      setUserStorage(getStorage.email);
    }
  }, [userStorage]);

  return (
    <Style.HeaderContainer>
      <div>
        <img src={logo} alt="marca logo da empresa" />
      </div>
      <div>
        { !loggedUser
          ? <p>{userStorage ? `Último acesso: ${userStorage}` : 'Último acesso: Nenhum usuário encontrado'}</p>
          : <p>{loggedUser}</p> }
      </div>
    </Style.HeaderContainer>
  );
}

export default Header;
