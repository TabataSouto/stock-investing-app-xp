import styled from 'styled-components';

const NegotationContainer = styled.section`
  display: flex;
  justify-content: center;
  margin: 0.4cm 0;
`;

const NegotiationMain = styled.main`
  border: solid 1px ${({ theme }) => theme.borders.contourAssetsTable};
  font-size: 15px;
  height: 36em;
  width: 40em;
  & > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0 0.5cm;
  }
  & h3 {
    color: white;
    background: black;
    font-size: 14px;
    padding: 5px 20px;
  }
`;

export default {
  NegotationContainer,
  NegotiationMain,
};
