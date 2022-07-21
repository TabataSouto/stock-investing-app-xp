import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header';

function FinancialTransaction() {
  const navigate = useNavigate();
  const handleClick = ({ target: { name } }) => {
    if (name === 'confirm') {
      return;
    }
    navigate('/assets');
  };

  return (
    <section>
      <Header />
      <button
        name="go-back"
        type="button"
        onClick={handleClick}
      >
        Voltar
      </button>
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
