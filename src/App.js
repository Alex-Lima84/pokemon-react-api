import React from 'react'
import { ThemeTogglerButton } from './components/theme-toggler-button/theme-toggler-button';
import { ThemeProvider } from './context/theme-toggler';
import { AppRoutes } from "./pages/routes";

function App() {
  return (
    <>
      <ThemeProvider>
        <ThemeTogglerButton />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
