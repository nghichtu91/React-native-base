import AsyncStorage from '@react-native-async-storage/async-storage';
import { Observable } from '@Utils/Observable';

export enum Key {
  IsOnboarded = 'IsOnboarded',
  Locale = 'Locale',
  Region = 'Region',
  IsThemeDark = 'IsThemeDark',
}

export class StorageService {
  isOnboarding: Observable<boolean>;
  isThemeDark: Observable<boolean>;
  // region: Observable<Region | undefined>;

  ready: Observable<boolean>;

  constructor() {
    this.isOnboarding = new Observable<boolean>(false);
    this.isThemeDark = new Observable<boolean>(false);
    this.ready = new Observable<boolean>(false);
    this.init();
  }

  setOnboarded = async (value: boolean) => {
    await AsyncStorage.setItem(Key.IsOnboarded, value ? '1' : '0');
    this.isOnboarding.set(!value);
  };

  setLocale = async (value: string) => {
    await AsyncStorage.setItem(Key.Locale, value);
    // this.locale.set(value);
  };

  setOnThemeDark = async (value: boolean) => {
    await AsyncStorage.setItem(Key.IsThemeDark, value ? '1' : '0');
    this.isThemeDark.set(value);
  };

  private init = async () => {
    const isOnboarded = (await AsyncStorage.getItem(Key.IsOnboarded)) === '1';
    this.isOnboarding.set(!isOnboarded);
    const isThemeDark = (await AsyncStorage.getItem(Key.IsThemeDark)) === '1';
    this.isThemeDark.set(isThemeDark);
    this.ready.set(true);
  };
}
