import styled from 'styled-components';

const NegotiationMain = styled.main`
  border: solid 1px ${({ theme }) => theme.borders.contourAssetsTable};
  font-size: 15px;
  height: 40em;
  width: 50%;
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
  NegotiationMain,
};
