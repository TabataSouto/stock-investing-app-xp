import styled from 'styled-components';

const BankAccountsContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 0.8cm 0;
  width: 30em;
`;

const BankAccountsButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1cm;
  & div {
    display: flex;
    gap: 5px;
    justify-content: flex-end;
    width: 9.5em;
    img {
      width: 15px;
    }
    & button {
      border: none;
      border-radius: 2px;
      color: white;
      font-size: 16px;
      font-weight: 700;
      padding: 10px;
      width: 8em;
    }
  }
  & div:nth-child(1) {
    button {
      background: ${({ theme }) => theme.backgrounds.buyButtonHover};
    }
  }
  & div:nth-child(2) {
    button {
      background: ${({ theme }) => theme.backgrounds.sellButtonHover};
    }
  }
`;

const BankAccountsOptions = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 5px;
  letter-spacing: 1px;
  margin: 5px 0;
  height: 1cm;
  label {
    display: flex;
    gap: 5px;
  }
`;

const BankAccountsInput = styled.div`
  & label input {
    border: 1px solid ${({ theme }) => theme.borders.statusOrdersButton};
    padding: 0.4cm 2cm;
    text-align: center;
    outline: none;
    width: 100%;
  }
`;

export default {
  BankAccountsContainer,
  BankAccountsButtons,
  BankAccountsOptions,
  BankAccountsInput,
};
