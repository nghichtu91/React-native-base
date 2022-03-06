/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//#endregion
//#region  navigator
import { RootNavigator } from '@Navigators/index';
//#endregion

import { StorageServiceProvider } from '@Store/StorageServiceProvider';
//#region  theme
import { ThemeProvider } from '@Theme/ThemeProvider';

//#endregion
//#region  utils
import { captureException } from '@Utils/log';
//#endregion

import './src/i18n';
import '@Services/AwsServices/awsSetup';

const appInit = async () => {
  try {
  } catch (error) {
    captureException('appInit', error);
  }
};

const AppProvider = () => {
  React.useEffect(() => {
    appInit();
  }, []);

  return (
    <SafeAreaProvider>
      <StorageServiceProvider>
        <ThemeProvider>
          <RootNavigator />
        </ThemeProvider>
      </StorageServiceProvider>
    </SafeAreaProvider>
  );
};

export default AppProvider;
