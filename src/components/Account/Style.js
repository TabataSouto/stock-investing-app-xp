import styled from 'styled-components';

const AccountContainer = styled.section`
  display: flex;
  justify-content: center;
  > div {
    margin: 0.4cm 3cm;
    width: 40em;
    > p {
      font-size: 26px;
      letter-spacing: 1px;
    }
    & > div {
      & p {
        background: ${({ theme }) => theme.backgrounds.assetsInTable};
        padding: 1em;
        span {
          color: ${({ theme }) => theme.colors.balance};
          letter-spacing: 1px;
          font-size: 18px;
          font-weight: 700;
        }
      }
      ul {
        border: 1px solid ${({ theme }) => theme.borders.contourBalance};
        border-top: none;
        font-size: 14px;
        letter-spacing: 1px;
        padding: .3cm .2cm;
        list-style: none;
        span {
          color: red;
        }
      }
    }
  }
`;

const AccountForm = styled.form`
  width: 35em;
  & > div {
    display: flex;
    gap: 20px;
    justify-content: center;
  }

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
    & button:hover {
      background: ${({ theme }) => theme.backgrounds.footerButtonHover}
    }
`;

const AccountNotAllowed = styled.div`
  align-items: center;
  display: flex;
  gap: 10px;
  justify-content: center;
  img {
    width: 15px;
  }
`;

const AccountButtons = styled.div`
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
  & button:hover {
    background: ${({ theme }) => theme.backgrounds.footerButtonHover}
  }
`;

export default {
  AccountContainer,
  AccountForm,
  AccountNotAllowed,
  AccountButtons,
};
