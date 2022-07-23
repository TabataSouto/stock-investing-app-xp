import styled from 'styled-components';

const TableContainer = styled.section`
  font-size: 15px;
  border: solid 1px ${({ theme }) => theme.borders.contourAssetsTable};
  width: 40em;
  & h3 {
    color: white;
    background: black;
    font-size: 14px;
    padding: 5px 20px;
  }
`;

const TableCardAssets = styled.table`
  border-collapse: collapse;
  padding: 5px;
  width: 100%;
  text-align: center;
`;

const TheadCardAssets = styled.thead`
  & th {
    padding: 5px 0;
    font-size: 13px;
    letter-spacing: 2px;
    text-transform: uppercase;
  }
`;

const TbodyCardAssets = styled.tbody`
  & td {
    color: #707070;
    padding: 4px;
    transition: background .5s, color .5s;
  }
  & td:nth-child(4) button {
    border: none;
    border-radius: 5px;
    color: #707070;
    height: 20px;
    margin: 0 5px;
    width: 20px;
    transition: background .5s, color .5s;
  }
  & tr td button:nth-child(1) {
    background: ${({ theme }) => theme.backgrounds.buyButton};
  }
  & tr td button:nth-child(2) {
    background: ${({ theme }) => theme.backgrounds.sellButton};
  }
  & tr:hover td:nth-child(4) {
    & button:nth-child(1) {
      color: black;
      background: ${({ theme }) => theme.backgrounds.buyButtonHover};
    }
    & button:nth-child(2) {
      color: black;
      background: ${({ theme }) => theme.backgrounds.sellButtonHover};
    }
  }
  & tr:hover td {
    font-weight: 700;
    color: black;
  }
  & tr:hover td:nth-child(1) {
    color: black;
    background: ${({ theme }) => theme.colors.tableHover};
  }
  & tr:nth-child(2n+1) {
    background: ${({ theme }) => theme.backgrounds.assetsInTable};
  }
`;

export default {
  TableContainer,
  TableCardAssets,
  TheadCardAssets,
  TbodyCardAssets,
};
