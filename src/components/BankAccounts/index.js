import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { operationType, selectedBank, valueTransition } from '../../redux/reducers/account';
import Input from '../Input';
import Button from '../Button';
import iconCheked from '../../images/check.svg';
import Style from './Style';

function BankAccounts() {
  const account = useSelector((state) => state.account.operationType);
  const [bank, setBank] = useState({
    bankAccount: '',
    value: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedBank(bank.bankAccount));
    dispatch(valueTransition(bank.value));
  }, [bank, account]);

  const handleChange = ({ target }) => {
    setBank({
      ...bank,
      [target.name]: target.value,
    });
  };

  const handleClick = ({ target: { name } }) => {
    dispatch(operationType(name));
  };

  return (
    <Style.BankAccountsContainer>
      <Style.BankAccountsButtons>
        {
          account === 'Depósito'
            ? (
              <div>
                <img src={iconCheked} alt="icon cheked" />
                <Button
                  name="Depósito"
                  disabled={false}
                  onClick={handleClick}
                  title="Depósito"
                />
              </div>
            )
            : (
              <div>
                <Button
                  name="Depósito"
                  disabled={false}
                  onClick={handleClick}
                  title="Depósito"
                />
              </div>
            )
        }
        {
          account === 'Retirada'
            ? (
              <div>
                <img src={iconCheked} alt="icon cheked" />
                <Button
                  name="Retirada"
                  disabled={false}
                  onClick={handleClick}
                  title="Retirada"
                />
              </div>
            )
            : (
              <div>
                <Button
                  name="Retirada"
                  disabled={false}
                  onClick={handleClick}
                  title="Retirada"
                />
              </div>
            )
        }
      </Style.BankAccountsButtons>
      <Style.BankAccountsOptions>
        {
        account === 'Retirada' && (
          <>
            <label htmlFor="bradesco">
              <input
                id="bradesco"
                name="bankAccount"
                type="radio"
                value="bradesco"
                onChange={handleChange}
              />
              Bradesco - Agência: 9876 cc: 5432-1
            </label>
            <label htmlFor="itau">
              <input
                id="itau"
                name="bankAccount"
                type="radio"
                value="itau"
                onChange={handleChange}
              />
              Itau - Agência: 1234 cc: 5687-9
            </label>
          </>
        )
        }
      </Style.BankAccountsOptions>
      <Style.BankAccountsInput>
        <Input
          title=""
          id="value-trans"
          type="number"
          name="value"
          placeholder="Digite o valor"
          value={bank.value}
          onChange={handleChange}
          disabled={false}
          max={10000}
        />
      </Style.BankAccountsInput>
    </Style.BankAccountsContainer>
  );
}

export default BankAccounts;
