import styled from 'styled-components';

const AccountContainer = styled.section`
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
  }
`;

export default {
  AccountContainer,
};
