import styled from 'styled-components';

const AccountContainer = styled.section`
  margin: 0.4cm 3cm;
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
`;

export default {
  AccountContainer,
};
