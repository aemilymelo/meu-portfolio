import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --bone: #E8DBCB;
    --cavern-pink: #f7e1d3;
    --congo-brown: #5F3A42;
    --battleship-gray: #839973;
    --bright-gray: #36374B;
    --battleship-grayd: #f7e1d1;
  }

  body {
    background-color: var(--bone);
    color: var(--bright-gray);
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: var(--congo-brown);
    color: white;
    padding: 20px;
    text-align: center;
  }

  button {
    background-color: var(--battleship-gray);
    color: white;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: var(--cavern-pink);
  }

  footer {
    background-color: var(--congo-brown);
    color: white;
    padding: 10px;
    text-align: center;
  }
`;

export default GlobalStyles;
