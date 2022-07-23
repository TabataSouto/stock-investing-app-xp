import styled from 'styled-components';

const AssetContainer = styled.section`
  height: 100vh;
`;

const MainAssets = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  /* height: 84vh; */
  margin: 0.4cm;
  gap: 20px;
  > button {
    background: transparent;
    border: 1px solid ${({ theme }) => theme.borders.statusOrdersButton};
    font-weight: 700;
    padding: 10px 15px;
    text-transform: uppercase;
    transition: background .5s
  }
  > button:hover {
    background: ${({ theme }) => theme.backgrounds.footerButtonHover}
  }
`;

export default {
  AssetContainer,
  MainAssets,
};
