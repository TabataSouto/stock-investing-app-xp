import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import BankAccounts from '../BankAccounts';
import Button from '../Button';

function Account() {
  const navigate = useNavigate();
  const { value } = useSelector((state) => ({
    value: state.account,
  }));

  const handleClick = ({ target: { name } }) => {
    if (name === 'confirm') {
      return;
    }
    navigate('/assets');
  };

  useEffect(() => {
    console.log(value);
  });

  return (
    <section>
      <div>
        <p>
          Saldo em conta:
          {' '}
          <span>
            { value.balance < 0 ? 0.00 : (value.balance).toFixed(2) }
          </span>
        </p>
        <ul>
          <li>
            lançamentos futuros:
            {' '}
            <span>{(value.leveradedValue).toFixed(2)}</span>
          </li>
          <li>
            garantias:
            {' '}
            <span>{(value.rentValue).toFixed(2)}</span>
          </li>
        </ul>
      </div>
      <form>
        <BankAccounts />
        <Button
          name="go-back"
          disabled={false}
          onClick={handleClick}
          title="Voltar"
        />
        <Button
          name="go-back"
          disabled={false}
          onClick={handleClick}
          title="Confirmar"
        />
      </form>
    </section>
  );
}

export default Account;
