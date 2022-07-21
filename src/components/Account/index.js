import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deposit, notAllowed } from '../../redux/reducers/account';
import BankAccounts from '../BankAccounts';
import Button from '../Button';

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { account } = useSelector((state) => state);

  const handleClick = ({ target: { name } }) => {
    const { transitionValue, balance, operationType } = account;

    if (name === 'confirm') {
      if (operationType === 'Retirada' && transitionValue > balance) {
        dispatch(notAllowed(true));
      }
      if (operationType === 'Depósito') {
        dispatch(deposit(transitionValue));
        dispatch(notAllowed(false));
      }
    } else {
      navigate('/assets');
    }
  };

  return (
    <section>
      <div>
        <p>
          Saldo em conta:
          {' '}
          <span>
            { account.balance < 0 ? 0.00 : account.balance }
          </span>
        </p>
        <ul>
          <li>
            lançamentos futuros:
            {' '}
            <span>{account.leveradedValue}</span>
          </li>
          <li>
            garantias:
            {' '}
            <span>{account.rentValue}</span>
          </li>
        </ul>
      </div>
      <form>
        <BankAccounts />
        { account.notAllowed && <p>O valor de saque é maior do que disponível em conta</p>}
        <Button
          name="go-back"
          disabled={false}
          onClick={handleClick}
          title="Voltar"
        />
        <Button
          name="confirm"
          disabled={false}
          onClick={handleClick}
          title="Confirmar"
        />
      </form>
    </section>
  );
}

export default Account;
