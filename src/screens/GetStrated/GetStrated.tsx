import React, { useCallback } from 'react';
import { ScreenWraper } from '@Components/ScreenWraper';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { RootScreen } from '@Navigators/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GET_STARTED_COMPLETE } from '../../store/constants';

import { useTranslation } from 'react-i18next';
import { translations } from '../../i18n/translations';
import { GetStratedScreenNavigationProp } from './types';

//#region components
import {
  SkipButton,
  GetStartedButton,
  Header,
  HeaderTipOne,
  HeaderTipSecond,
  Footer,
  Content,
  BackgroundTransform,
  BackgroudAbsolute,
  ImageBackground,
  Container,
} from './components';
//#endregion

//#region  images
import GetStartedOne from '@Assets/bg-get-started-1.png';
import GetStartedSecond from '@Assets/bg-get-started-2.png';
//#endregion

export const GetStrated = () => {
  const { t } = useTranslation();
  const navigation = useNavigation<GetStratedScreenNavigationProp>();

  const getStartedComplete = async () => {
    try {
      await AsyncStorage.setItem(GET_STARTED_COMPLETE, '1');
    } catch {
      throw Error('save started complete error');
    }
  };

  const goToAuthenScreen = () => {
    getStartedComplete();
    navigation.navigate(RootScreen.AUTHEN);
  };

  const params = useNavigationState((state) => state.routes);
  const isStepSecond = !!params.find(
    (router) => router.name === RootScreen.GETSTRATED_SECONDARY,
  );
  const imageBG = !isStepSecond ? GetStartedOne : GetStartedSecond;
  const nextGetStartd = useCallback(
    () => navigation.navigate(RootScreen.GETSTRATED_SECONDARY),
    [navigation],
  );

  const titleHeader = t(
    !isStepSecond
      ? translations.GetStartedScreen.HeaderTitleOne
      : translations.GetStartedScreen.HeaderTitleSecond,
  );

  const titleSecondHeader = t(
    !isStepSecond
      ? translations.GetStartedScreen.HeaderSubTitleOne
      : translations.GetStartedScreen.HeaderSubTitleSecond,
  );

  return (
    <ScreenWraper>
      <Header>
        <SkipButton
          onPress={goToAuthenScreen}
          title={t(translations.GetStartedScreen.SkipText)}
        />
        <HeaderTipOne>{titleHeader}</HeaderTipOne>
        <HeaderTipSecond>{titleSecondHeader}</HeaderTipSecond>
      </Header>
      <Content>
        <BackgroundTransform />
        <BackgroudAbsolute>
          <Container>
            <ImageBackground resizeMode="contain" source={imageBG}>
              <GetStartedButton
                title={t(translations.GetStartedScreen.GetStartedBtnText)}
                onPress={!isStepSecond ? nextGetStartd : goToAuthenScreen}
              />
            </ImageBackground>
          </Container>
        </BackgroudAbsolute>
      </Content>
      <Footer />
    </ScreenWraper>
  );
};
