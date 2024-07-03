import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
  @font-face {
    font-family: 'GandhiSans';
    src: url('/fonts/GandhiSans-Bold.otf');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'GandhiSans';
    src: url('/fonts/GandhiSans-Regular.otf');
    font-weight: normal;
    font-style: normal;
  }

  html {
    font-family: 'GandhiSans';
    font-size: 62.5%;
  }
  body {
    background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  }

  #root {
    max-width: 1300px;
    margin: 0 auto;
  }
`
export default GlobalStyles;