/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//#endregion
//#region  navigator
import { RootNavigator } from '@Navigators/index';
import DevPersistedNavigationContainer from '@Navigators/DevPersistedNavigationContainer';
//#endregion

import { StorageServiceProvider } from '@Store/StorageServiceProvider';
//#region  theme
import { ThemeProvider } from '@Theme/styled-components';
import { myTheme } from '@Theme/theme';
//#endregion
//#region  utils
import { captureException } from '@Utils/log';
//#endregion
import './src/i18n';
import { awsSetup } from '@Services/AwsServices/awsSetup';
import { AwsProvider } from '@Services/AwsServices/AwsProvider';

awsSetup();

const appInit = async () => {
  try {
  } catch (error) {
    captureException('appInit', error);
  }
};

const App = () => {
  useEffect(() => {
    appInit();
  }, []);
  return (
    <DevPersistedNavigationContainer persistKey="navigationState">
      <RootNavigator />
    </DevPersistedNavigationContainer>
  );
};

const AppProvider = () => {
  useEffect(() => {
    appInit();
  }, []);

  return (
    <SafeAreaProvider>
      <StorageServiceProvider>
        <ThemeProvider theme={myTheme}>
          <AwsProvider>
            <App />
          </AwsProvider>
        </ThemeProvider>
      </StorageServiceProvider>
    </SafeAreaProvider>
  );
};

export default AppProvider;
