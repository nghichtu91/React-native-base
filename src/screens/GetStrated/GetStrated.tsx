import React, { useCallback } from 'react';
import { ScreenWraper } from '@Components/ScreenWraper';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { RootScreen } from '@Navigators/constant';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GET_STARTED_COMPLETE } from '../../store/constants';
import { ViewStyle, TextStyle, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { translations } from '../../i18n/translations';
import { GetStratedScreenNavigationProp } from './types';
import { Button, Caption, Headline } from 'react-native-paper';

//#region components
import { Header, Footer, Content } from './components';
//#endregion

//#region  images
import GetStartedOne from '@Assets/bg-get-started-1.png';
import GetStartedSecond from '@Assets/bg-get-started-2.png';
//#endregion

const styles = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
});

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

  const cc: ViewStyle = {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    opacity: 1,
  };

  const TitleHeader: TextStyle = {
    textAlign: 'center',
    fontSize: 28,
  };

  return (
    <ScreenWraper>
      <Header>
        <Button style={[cc]} mode="text" onPress={goToAuthenScreen}>
          {t(translations.GetStartedScreen.SkipText)}
        </Button>
        <Headline style={TitleHeader}>{titleHeader}</Headline>
        <Caption style={[styles.textCenter]}>{titleSecondHeader}</Caption>
      </Header>
      <Content>
        {/* <BackgroundTransform />
        <BackgroudAbsolute>
          <Container>
            <ImageBackground resizeMode="contain" source={imageBG}>
              <Button
                // title={t(translations.GetStartedScreen.GetStartedBtnText)}
                onPress={!isStepSecond ? nextGetStartd : goToAuthenScreen}>
                {t(translations.GetStartedScreen.GetStartedBtnText)}{' '}
              </Button>
            </ImageBackground>
          </Container>
        </BackgroudAbsolute> */}
      </Content>
      <Footer />
    </ScreenWraper>
  );
};
