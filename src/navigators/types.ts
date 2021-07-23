import { RootScreen } from '@Navigators/constant';

export type RootStackParamList = {
  [RootScreen.APP]?: undefined;
  [RootScreen.GETSTRATED_SECONDARY]?: object | undefined;
  [RootScreen.AUTHEN]?: object | undefined;
};
