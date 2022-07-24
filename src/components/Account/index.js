import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deposit, withdrawal, notAllowed } from '../../redux/reducers/account';
import BankAccounts from '../BankAccounts';
import Button from '../Button';
import iconNotAllowed from '../../images/not-allowed.svg';
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
      } else if (operationType === 'Retirada') {
        dispatch(withdrawal(transitionValue));
        dispatch(notAllowed(false));
      } else if (operationType === 'Depósito') {
        dispatch(deposit(transitionValue));
        dispatch(notAllowed(false));
      }
    } else {
      navigate('/assets');
    }
  };

  return (
    <Style.AccountContainer>
      <div>
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
              <span>{account.rentValue > 0 && account.rentValue}</span>
            </li>
          </ul>
        </div>
        <form>
          <BankAccounts />
          {
            account.notAllowed
              ? (
                <Style.AccountNotAllowed>
                  <img src={iconNotAllowed} alt="saque não permitido" />
                  <p>Valor de saque maior do que disponível em conta</p>
                </Style.AccountNotAllowed>
              )
              : (
                <Style.AccountNotAllowed />
              )
          }
          <Style.AccountButtons>
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
          </Style.AccountButtons>
        </form>
      </div>
    </Style.AccountContainer>
  );
}

export default Account;
