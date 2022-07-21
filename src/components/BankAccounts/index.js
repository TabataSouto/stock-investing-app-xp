import React, { useState } from 'react';

function BankAccounts() {
  const [bank, setBank] = useState('');
  console.log(bank);

  const handleChange = ({ target }) => {
    setBank(target.value);
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
    </>
  );
}

export default BankAccounts;
