import React from 'react';
import { ScreenWraper } from '@Components/ScreenWraper';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';

import styled from '../../theme/styled-components';
import { useTheme } from '@Theme/hooks/useTheme';

import {
  HomeIcon,
  MessagesIcon,
  ArticlesIcon,
  ServicesIcon,
} from '@Assets/icons';

const Tab = createBottomTabNavigator();

const TextVV = styled.Text`
  color: ${(props) => props.theme.colors.PRIMARY};
`;

const TabHome = () => {
  const { theme, model } = useTheme();
  return (
    <ScreenWraper>
      <View>
        <TextVV> {model}</TextVV>
        <HomeIcon fill={theme.colors.PRIMARY} />
      </View>
    </ScreenWraper>
  );
};

const TabSevices = () => {
  return (
    <ScreenWraper>
      <View>
        <Text> TabSevices</Text>
      </View>
    </ScreenWraper>
  );
};

const TabMessages = () => {
  return (
    <ScreenWraper>
      <View>
        <Text> TabMessages</Text>
      </View>
    </ScreenWraper>
  );
};

const TabArticles = () => {
  return (
    <ScreenWraper>
      <View>
        <Text> TabArticles</Text>
      </View>
    </ScreenWraper>
  );
};

export const App = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const tabBarInactiveTintColor = theme.colors.BLACK;
  const tabBarActiveTintColor = theme.colors.PRIMARY;
  return (
    <Tab.Navigator
      initialRouteName="TabHome"
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor,
        tabBarActiveTintColor,
      }}>
      <Tab.Screen
        name="TabHome"
        component={TabHome}
        options={{
          tabBarIcon: ({ color }) => <HomeIcon fill={color} />,
          tabBarLabel: t('AppScreen.HomeTabTitle'),
        }}
      />
      <Tab.Screen
        name="TabSevices"
        component={TabSevices}
        options={{
          tabBarIcon: ({ color }) => <ServicesIcon fill={color} />,
          tabBarLabel: t('AppScreen.SevicesTabTitle'),
        }}
      />
      <Tab.Screen
        name="TabArticles"
        component={TabArticles}
        options={{
          tabBarIcon: ({ color }) => <ArticlesIcon fill={color} />,
          tabBarLabel: t('AppScreen.ArticlesTabTitle'),
        }}
      />

      <Tab.Screen
        name="TabMessages"
        component={TabMessages}
        options={{
          tabBarIcon: ({ color }) => <MessagesIcon fill={color} />,
          tabBarLabel: t('AppScreen.MessagesTabTitle'),
        }}
      />
    </Tab.Navigator>
  );
};
