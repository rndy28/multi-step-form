import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        scroll-behavior: smooth;
    }
    body {
        font-family: 'Quicksand', -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    h1, h2, h3, h4, h5, h6 {
        margin-block: 0;
        color: #434C5E;
    }
    p {
        color: #4C566A;
    }
    ul, li {
        list-style-type: none;
    }
    input, button {
        font-family: inherit;
        font-size: inherit;
        border: none;
        outline: none;
    }
    img {
        max-width: 100%;
    }
    input[type="search"]::-webkit-search-decoration,
    input[type="search"]::-webkit-search-cancel-button,
    input[type="search"]::-webkit-search-results-button,
    input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance:none;
    }
`;
