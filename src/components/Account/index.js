import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deposit, notAllowed } from '../../redux/reducers/account';
import BankAccounts from '../BankAccounts';
import Button from '../Button';
import Style from './Style';

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
    <Style.AccountContainer>
      <p>Meu extrato</p>
      <div>
        <p>
          Saldo em conta:
          {' '}
          <span>
            { account.balance < 0 ? (0).toFixed(2) : (account.balance).toFixed(2) }
          </span>
        </p>
        <ul>
          <li>
            Lançamentos futuros:
            {' '}
            <span>{account.leveradedValue < 0 && (account.leveradedValue).toFixed(2)}</span>
          </li>
          <li>
            Garantias:
            {' '}
            {/* ARRUMA ESSA PARTE DEPOIS DE MUDAR A LÓGICA PARA QUE
            RETORNE UM VALOR NEGATIVO */}
            <span>{account.rentValue > 0 && (account.rentValue).toFixed(2)}</span>
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
    </Style.AccountContainer>
  );
}

export default Account;
