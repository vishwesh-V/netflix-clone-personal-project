import { createGlobalStyle } from 'styled-components';


//smoothing improves appereance on browsers
export const GlobalStyles = createGlobalStyle`
    html, body {
        font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased; 
        -moz-osx-font-smoothing: grayscale;
        background-color: black;
        color: #FFFFFF;
        font-size: 16px;
    }

`;