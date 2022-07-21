import React from 'react';
// import { useNavigate } from 'react-router-dom';
import Account from '../../components/Account';
import Header from '../../components/Header';

function FinancialTransaction() {
  return (
    <section>
      <Header />
      <Account />
      {/* { electronicPassword.confirm
            ? <p>Operação confirmada com sucesso!</p>
            : (
              <button
                name="confirm"
                type="button"
                onClick={handleClick}
                disabled={isButtonDisabled}
              >
                Confirmar
              </button>
            )} */}
    </section>
  );
}

export default FinancialTransaction;
