import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  deposit, withdrawal, notAllowed, updateLeveradedValue,
} from '../../redux/reducers/account';
import BankAccounts from '../BankAccounts';
import Button from '../Button';
import iconNotAllowed from '../../images/not-allowed.svg';
import Style from './Style';

function Account() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { account, orders } = useSelector((state) => ({
    account: state.account,
    orders: state.orders.executedOrders,
  }));

  useEffect(() => {
    // console.log('ordens executadas', orders);
    if (orders !== undefined) {
      console.log('valores de garantia', orders.filter((order) => order.quantity < 0)
        .reduce((acc, total) => acc + total.amount, 0));
    }
    if (account.balance > 0) {
      dispatch(updateLeveradedValue(0));
    }
  }, []);

  const handleClick = ({ target: { name } }) => {
    const { transitionValue, balance, operationType } = account;
    if (name === 'confirm') {
      if (operationType === 'Retirada' && transitionValue > balance) {
        dispatch(notAllowed(true));
      } else if (operationType === 'Retirada') {
        dispatch(withdrawal(transitionValue));
        dispatch(notAllowed(false));
      } else if (operationType === 'Depósito') {
        // if (account.balance < 0) {

        // }
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
              {account.balance < 0 ? 0.00 : (account.balance).toFixed(2)}
            </span>
          </p>
          <ul>
            <li>
              Lançamentos futuros:
              {' '}
              <span>
                { account.leveradedValue > 0 ? 0.00 : (account.leveradedValue).toFixed(2)}
              </span>
            </li>
            <li>
              Garantias:
              {' '}
              <span>
                {(orders.filter((order) => order.quantity < 0)
                  .reduce((acc, total) => acc + total.amount, 0)).toFixed(2)}

              </span>
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
