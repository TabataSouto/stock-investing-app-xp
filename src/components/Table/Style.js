import styled from 'styled-components';

const OrdersTable = styled.table`
  border: solid 1px ${({ theme }) => theme.borders.contourAssetsTable};
  border-collapse: collapse;
  width: 100%;
`;
const OrdersThead = styled.thead`
  & th {
    padding: 5px 0;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;
const OrdersTbody = styled.tbody`
  text-align: center;
  & td {
    padding: 4px;
  }
  & tr td {
    background: ${({ theme }) => theme.backgrounds.assetsInTable};
  }
`;

export default {
  OrdersTable,
  OrdersThead,
  OrdersTbody,
};
