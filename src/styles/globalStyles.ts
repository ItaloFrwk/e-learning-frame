import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    @font-face { 
    font-family: 'Roboto';
    font-style: normal;
    font-weight: normal;
    src: url('/assets/fonts/Roboto-Regular.ttf') format('truetype');
    }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  html, body, #root {
    min-height: 100vh;
    overflow: hidden;
    font-family: Soleil, Arial, Helvetica, sans-serif;
    background: #F0F7F5;
  }
  button, input, optgroup, select, textarea {
    font-family: inherit;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
    background-color: #E5E5E5;
  }
  ol, ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: none;
  }
`;

export default GlobalStyle;
