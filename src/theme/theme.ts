import React from 'react';
import { colors } from '@Theme/doctor/color';
import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';
import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
} from 'react-native-paper';
import merge from 'deepmerge';

import fontConfig from './doctor/fonts';
type ThemeType = typeof PaperDefaultTheme;

const AppThemeDefault: ThemeType = {
  ...PaperDefaultTheme,
  roundness: 14,
  colors: {
    ...PaperDefaultTheme.colors,
    ...colors,
  },
  fonts: fontConfig,
};

const AppThemeDark: ThemeType = {
  ...PaperDarkTheme,
  fonts: fontConfig,
};

export const CombinedDefaultTheme = merge(
  AppThemeDefault,
  NavigationDefaultTheme,
);

export const CombinedDarkTheme = merge(AppThemeDark, NavigationDarkTheme);

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false,
});
