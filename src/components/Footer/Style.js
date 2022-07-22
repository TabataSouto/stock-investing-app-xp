import styled from 'styled-components';

const FooterContainer = styled.footer`
  align-items: center;
  display: flex;
  height: 3.5em;
  justify-content: center;
  gap: 20px;
  & button { 
    background: ${({ theme }) => theme.backgrounds.footerButton};
    border: none;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 2px;
    padding: 1em 1.5cm;
    transition: background 1s;
    text-transform: uppercase;
  }
  & button:hover {
    background: ${({ theme }) => theme.backgrounds.footerButtonHover}
  }
`;

export default {
  FooterContainer,
};
