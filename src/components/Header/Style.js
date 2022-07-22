import styled from 'styled-components';

const HeaderContainer = styled.header`
  align-items: center;
  background-color: ${({ theme }) => theme.backgrounds.header};
  display: flex;
  height: 4.5em;
  justify-content: space-between;
  padding: 0 3cm;
  img {
    margin-top: 5px;
    width: 42px;
  }
  p {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.header};
    text-transform:  uppercase;
  }
`;

const test = styled.div`
`;

export default {
  HeaderContainer,
  test,
};
