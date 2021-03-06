import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { DevSettings } from 'react-native';

import { StorageService } from './StorageService';
const StorageServiceContext = createContext<StorageService | undefined>(
  undefined,
);

export interface StorageServiceProviderProps {
  children?: React.ReactElement;
}

export const StorageServiceProvider = ({
  children,
}: StorageServiceProviderProps) => {
  const storageService = useMemo(() => new StorageService(), []);
  const [ready, setReady] = useState(false);

  useEffect(() => storageService.ready.observe(setReady), [storageService]);
  return (
    <StorageServiceContext.Provider value={storageService}>
      {ready && children}
    </StorageServiceContext.Provider>
  );
};

export const useStorage = () => {
  const storageService = useContext(StorageServiceContext)!;
  const [isOnboarding, setIsOnboarding] = useState(
    storageService.isOnboarding.get(),
  );
  const setOnboarded = useMemo(
    () => storageService.setOnboarded,
    [storageService.setOnboarded],
  );

  const [isThemeDark, setIsThemeDarking] = useState(
    storageService.isThemeDark.get(),
  );

  const setIsThemeDark = useMemo(
    () => storageService.setOnThemeDark,
    [storageService.setOnThemeDark],
  );

  useEffect(
    () => storageService.isOnboarding.observe(setIsOnboarding),
    [storageService.isOnboarding],
  );

  useEffect(
    () => storageService.isThemeDark.observe(setIsThemeDarking),
    [storageService.isThemeDark],
  );

  const reset = useCallback(async () => {
    setOnboarded(false);
    await AsyncStorage.clear();
    if (__DEV__) {
      DevSettings.reload('Reset app');
    }
  }, [setOnboarded]);

  return useMemo(
    () => ({
      isOnboarding,
      setOnboarded,
      reset,
      isThemeDark,
      setIsThemeDark,
    }),
    [isOnboarding, isThemeDark, reset, setIsThemeDark, setOnboarded],
  );
};
