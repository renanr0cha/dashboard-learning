import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    width: 100%;
    height: 100vh;
    background-color: #EEF0FE;
    color: ${theme.colors.main};
    -webkit-font-smoothing: antialised;
  }
  body, input, button, textarea {
    font-family: 'Poppins', serif;
    font-size: 16px;
  }
  a {
    text-decoration: none;
  }
  button:hover, a:hover {
    cursor: pointer;
    transition: filter 0.2s;
  }
`