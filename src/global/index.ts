import styled, {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button{
        border: none;
        background-color: transparent;

    }

    ul,ol,li{
        text-decoration: none;
        margin: 0;
        padding: 0;
    }

    body{
        width: 100%;
        height: 100%;
    }

`;

export default GlobalStyle