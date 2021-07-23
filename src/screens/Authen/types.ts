import { RootStackParamList } from '@Navigators/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthScreen } from '@Navigators/constant';

type AuthenStackParamList = {
  [AuthScreen.LOGIN]?: undefined | object;
  [AuthScreen.REGISTER]?: undefined | object;
} & RootStackParamList;

export type AuthenScreenNavigationProp =
  NativeStackNavigationProp<AuthenStackParamList>;
