import { useContext } from 'react';
import { DefaultTheme } from 'styled-components';
import { ThemeContext } from '../styled-components';
import { useColorScheme } from 'react-native';

interface ILayout {
  theme: DefaultTheme;
  model: string | undefined | null;
}

function useTheme(): ILayout {
  const model = useColorScheme();
  const theme = useContext(ThemeContext);
  return { theme, model };
}

export { useTheme };
