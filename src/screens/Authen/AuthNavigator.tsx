import React from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import { Authen } from './Authen';
import { Register } from './Register';
import { AuthScreen } from '@Navigators/constant';

const AuthStack = createNativeStackNavigator();
const DEFAULT_SCREEN_OPTIONS: NativeStackNavigationOptions = {
  presentation: 'containedModal',
  headerShown: false,
};

export const AuthNavigator = () => {
  return (
    <AuthStack.Navigator
      screenOptions={DEFAULT_SCREEN_OPTIONS}
      initialRouteName={AuthScreen.LOGIN}>
      <AuthStack.Screen name={AuthScreen.LOGIN} component={Authen} />
      <AuthStack.Screen name={AuthScreen.REGISTER} component={Register} />
    </AuthStack.Navigator>
  );
};
