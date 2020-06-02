import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0; 
    }

    *,
    *::before,
    *::after {
        box-sizing: inherit; 
    }

    html {
        box-sizing: border-box;
        font-size: 62.5%; 
    }
 

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.6;
        color: #555;
        background-color: #F0F1F6;
    }
`;

export default GlobalStyle;
