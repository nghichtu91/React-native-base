import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { CombinedDarkTheme, CombinedDefaultTheme } from './theme';
import DevPersistedNavigationContainer from '@Navigators/DevPersistedNavigationContainer';
import { useStorage } from '@Store/index';

export const ThemeContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});

export interface ThemeProviderProps {
  children?: React.ReactElement;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const storage = useStorage();
  const [isThemeDark, setIsThemeDark] = React.useState(storage.isThemeDark);
  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    storage.setIsThemeDark(!isThemeDark);
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark, storage]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <ThemeContext.Provider value={preferences}>
      <PaperProvider theme={theme}>
        <DevPersistedNavigationContainer
          persistKey="navigationState"
          theme={theme}>
          {children}
        </DevPersistedNavigationContainer>
      </PaperProvider>
    </ThemeContext.Provider>
  );
};

export const useAppTheme = () => {
  const { isThemeDark, toggleTheme } = React.useContext(ThemeContext);
  return {
    isThemeDark,
    toggleTheme,
  };
};
