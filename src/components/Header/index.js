import React from 'react';
import { useSelector } from 'react-redux';

import logo from '../../images/logo-xpi.svg';
// import storage from '../../helpers/storage';
// import { userLogin } from '../../redux/reducers/loginSlice';

import Style from './Style';

function Header() {
  const loggedUser = useSelector((state) => state.login.email);

  return (
    <Style.HeaderContainer>
      <div>
        <img src={logo} alt="marca logo da empresa" />
      </div>
      <div>
        { loggedUser && <p>{loggedUser}</p>}
      </div>
    </Style.HeaderContainer>
  );
}

export default Header;
