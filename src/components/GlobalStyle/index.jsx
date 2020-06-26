import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    *,
    *:before,
    *:after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        color: ${props => props.theme.bodyText};
        font-family: Helvetica Neue, Arial, sans-serif;
        font-size: 16px;
        font-size: 1.6rem;
        line-height: 1.25;
        word-break: break-word;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }

    a {
        color: ${props => props.theme.link};
        text-decoration: none;
    };
`;

export { GlobalStyle };
