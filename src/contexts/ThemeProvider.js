import React from 'react';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from '../useDarkMode';

import { light as LightTheme, dark as DarkTheme } from '../style';

const ThemeProviderWrapper = ({ children }) => {
  // Custom hook for persistent darkmode
  const [theme, setTheme] = useDarkMode();

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((state) => (state.id === 'light' ? DarkTheme : LightTheme));
        }
      }}>
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
