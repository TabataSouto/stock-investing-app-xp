import styled from 'styled-components';

const BuyAndSellContainer = styled.section`
  font-size: 16px;
  font-family: 'Times New Roman', Times, serif;
`;

const FinancialOrderValue = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
  width: 100%;
  & p {
    border: 1px solid ${({ theme }) => theme.borders.statusOrdersButton};
    padding: 0.4cm 2cm;
    width: inherit;
    & span {
      font-weight: 700;
    }
  }
`;

const FinancialOrderMain = styled.main`
  padding: 0.8cm 2cm;
  & > div {
    height: 3.5em;
    ul {
      li:nth-child(3) {
        color: #4c4c4c;
        border-bottom: 2px solid ${({ theme }) => theme.borders.statusOrdersButton};
        width: 15em;
      }
      span {
        font-weight: 700
      }
    }
  }
`;

const BuyAndSellButtons = styled.div`
  & input {
    border: 1px solid ${({ theme }) => theme.borders.statusOrdersButton};
    padding: 0.4cm 2cm;
    margin: 10px 0;
    width: 100%;
    text-align: center;
    outline: none;
  }
  & p:nth-child(2) {
    background: ${({ theme }) => theme.backgrounds.disabledButton};
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.5px;
    padding: 8.5px 4px;
    width: 15em;
    text-transform: uppercase;
    text-align: center;
  }
  & > div {
    align-items: center;
    display: flex;
    height: 3.5em;
    justify-content: center;
    padding: 1cm 0;
    gap: 20px;
    & button { 
      background: ${({ theme }) => theme.backgrounds.footerButton};
      border: none;
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 2px;
      padding: 0.4cm 1cm;
      transition: background 1s;
      text-transform: uppercase;
      }
    & button:disabled {
      background: ${({ theme }) => theme.backgrounds.disabledButton};
    }
    & button:hover {
      background: ${({ theme }) => theme.backgrounds.footerButtonHover}
    }
  }
`;

const BuyAndSellInput = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0.8cm 0;
  font-weight: 700;
  & label:nth-child(1) p {
    background: ${({ theme }) => theme.backgrounds.buyButtonHover};
  }
  & label:nth-child(2) p {
    background: ${({ theme }) => theme.backgrounds.sellButtonHover};
  }
  & label {
    align-items: center;
    display: flex;
    gap: 5px;
    & p {
      border-radius: 2px;
      color: white;
      margin: 5px 0;
      padding: 10px;
      text-align: center;
      width: 10em;
    }
    & input {
      background: transparent;
      border: none;
      border-bottom: 1px solid ${({ theme }) => theme.borders.bottomInput};
      padding: 11.5px;
      width: 15em;
      outline: none;
    }
  }
`;

export default {
  BuyAndSellContainer,
  FinancialOrderValue,
  FinancialOrderMain,
  BuyAndSellButtons,
  BuyAndSellInput,
};
