import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  operationType,
  // incrementBalance,
  selectedBank,
} from '../../redux/reducers/account';
import Input from '../Input';
import Button from '../Button';

function BankAccounts() {
  const [bank, setBank] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(selectedBank(bank));
  }, [bank]);

  const handleChange = ({ target }) => {
    setBank(target.value);
  };

  const handleClick = ({ target: { name } }) => {
    dispatch((operationType(name)));
  };

  return (
    <>
      <label htmlFor="itau">
        <input
          id="itau"
          name="bank"
          type="radio"
          value="itau"
          onChange={handleChange}
        />
        Itau - Agência: 1234 cc: 5687-9
      </label>
      <label htmlFor="bradesco">
        <input
          id="bradesco"
          name="bank"
          type="radio"
          value="bradesco"
          onChange={handleChange}
        />
        Bradesco - Agência: 9876 cc: 5432-1
      </label>
      <Input
        title=""
        id="token-validation"
        type="text"
        name="token"
        placeholder=""
        value=""
        onChange={() => {}}
        disabled={false}
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
