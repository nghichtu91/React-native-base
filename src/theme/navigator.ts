import { DefaultTheme, Theme } from '@react-navigation/native';

const tabBarInactiveTintColor = '#393938';
const tabBarActiveTintColor = '#EF873D';

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#fff',
    primary: '#EF873D',
  },
};

export { AppTheme, tabBarInactiveTintColor, tabBarActiveTintColor };
