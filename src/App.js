import React from 'react'
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { ThemeProvider } from './context/theme-toggler';
import { AppRoutes } from "./pages/routes";
import { createGlobalStyle } from 'styled-components'

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider>
        <ThemeTogglerButton />
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
  }
`

export default App;
