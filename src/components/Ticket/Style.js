import styled from 'styled-components';

const TableTicket = styled.table`
  border-collapse: collapse;
  width: 100%;
  text-align: center;
  cursor: default;
`;

const TheadTicket = styled.thead`
  & th {
    padding: 5px 0;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
  }
`;

const TbodyTicket = styled.tbody`
  & td {
    font-weight: 700;
    padding: 4px;
  }
  & tr td {
    background: ${({ theme }) => theme.backgrounds.assetsInTable};
  }
  & tr td:nth-child(1) {
    color: black;
    background: ${({ theme }) => theme.colors.tableHover};
  }
`;

export default {
  TableTicket,
  TheadTicket,
  TbodyTicket,
};
