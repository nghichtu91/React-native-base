import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
//#region  screens
import { GetStrated } from '@Screens/GetStrated';
import { App as AppScreen } from '@Screens/App';
import { AuthNavigator } from '@Screens/Authen/AuthNavigator';
//#endregion
//#region  constans
import { RootScreen } from '@Navigators/constant';
//#endregion
import { useStorage } from '@Store/index';
// import { useAuth } from '@Services/AwsServices/AwsProvider';
enableScreens();

const RootStack = createNativeStackNavigator();
const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  presentation: 'containedModal',
  headerShown: false,
};

export const RootNavigator = () => {
  const { isOnboarding } = useStorage();
  return (
    <RootStack.Navigator
      initialRouteName={
        isOnboarding ? RootScreen.GETSTRATED : RootScreen.AUTHEN
      }
      screenOptions={DEFAULT_SCREEN_OPTIONS}>
      <RootStack.Screen name={RootScreen.APP} component={AppScreen} />
      <RootStack.Screen name={RootScreen.AUTHEN} component={AuthNavigator} />
      <RootStack.Screen name={RootScreen.GETSTRATED} component={GetStrated} />
      <RootStack.Screen
        name={RootScreen.GETSTRATED_SECONDARY}
        component={GetStrated}
      />
    </RootStack.Navigator>
  );
};
