import React from 'react'
import { ThemeProvider } from './context/index.js';
import { AppRoutes } from "./pages/routes";
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Edu SA Beginner', cursive;
  }

  a{
    text-decoration: none;
    color: black;
}

  ul {
    list-style: none;
}

  img {
    max-width: 100%;
}
`

export default App;
