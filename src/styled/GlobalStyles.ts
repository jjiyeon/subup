import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export default createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  body{
    margin: 0;
    padding: 0;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  input, button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;
