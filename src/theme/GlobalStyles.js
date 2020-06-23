import { createGlobalStyle } from 'styled-components';
import FontFaces from './fonts';

const GlobalStyles = createGlobalStyle`
  ${FontFaces};

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: ${props => props.theme.fonts.Calibre};
    font-size: inherit;
    color: ${props => props.theme.cBlack};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Domino', sans-serif;
  }

  a {
    all: unset;
    color: currentColor;
  }

  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
    vertical-align: middle;
  }
`;

export default GlobalStyles;
