import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  operationType,
  selectedBank,
  valueTransition,
} from '../../redux/reducers/account';
import Input from '../Input';
import Button from '../Button';

function BankAccounts() {
  const [bank, setBank] = useState({
    bankAccount: '',
    value: 0,
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedBank(bank.bankAccount));
    dispatch(valueTransition(bank.value));
  }, [bank]);

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
    <>
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
      <Button
        name="Depósito"
        disabled={false}
        onClick={handleClick}
        title="Depósito"
      />
      <Button
        name="Retirada"
        disabled={false}
        onClick={handleClick}
        title="Retirada"
      />
    </>
  );
}

export default BankAccounts;
