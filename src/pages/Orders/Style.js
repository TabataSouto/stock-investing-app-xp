import styled from 'styled-components';

const OrdersContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: .4cm 1cm;
  & label {
    align-items: center;
    display: flex;
    margin: 0 10px;
    & input {
      border: 1px solid ${({ theme }) => theme.borders.statusOrdersButton};
      padding: 0.4cm 2cm;
      margin: 10px 0;
      text-align: center;
      outline: none;
    }
  }
  > button {
    align-self: center;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.borders.statusOrdersButton};
    font-weight: 700;
    padding: 10px 15px;
    text-transform: uppercase;
    transition: background .5s;
    width: 10em;
  }
  > button:hover {
    background: ${({ theme }) => theme.backgrounds.footerButtonHover}
  }
`;

export default {
  OrdersContainer,
};
