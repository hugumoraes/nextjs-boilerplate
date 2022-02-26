import { createGlobalStyle } from 'styled-components';

export const global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body, button, input, textarea, select {
    -webkit-font-smoothing: antialiased;
    font-family:  sans-serif;
  }

  ul {
    list-style: none;
  }

  a {
      text-decoration: none;
      color: inherit;
  }

  button {
    cursor: pointer;
  }
`;
