import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    color: black;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    cursor: default;
  }
  body {
    font-size: 16px;
  }
  button {
    cursor: pointer;
  }
  input {
    cursor: auto;
  }
`;
