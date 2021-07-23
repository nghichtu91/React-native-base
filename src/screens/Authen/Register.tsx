import React from 'react';
import { ScreenWraper } from '@Components/ScreenWraper';
import { Platform, Keyboard, Pressable } from 'react-native';
import styled from '@Theme/styled-components';
import Logo from '@Assets/logo.svg';
// import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth/lib/types';
// import { Auth } from 'aws-amplify';
import { useNavigation } from '@react-navigation/native';
import { RootScreen } from '@Navigators/constant';
import { AuthenScreenNavigationProp } from './types';

const Header = styled.View`
  flex: 3;
  justify-content: center;
  align-items: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Content = styled.View`
  flex: 6;
  justify-content: flex-start;
  align-items: center;
`;

const Footer = styled.View`
  flex: 0.3;
`;

const KeyboardAvoidingView = styled.KeyboardAvoidingView`
  flex: 1;
`;

const HGH = styled.Pressable`
  flex: 1;
`;

const BaseInner = styled.View`
  padding-left: 33px;
  padding-right: 33px;
  width: 100%;
`;

const HeaderAuthenForm = styled(BaseInner)`
  background: #f9f6f4;
  padding-top: 14px;
  padding-bottom: 14px;
  min-height: 84px;
`;

const BaseText = styled.Text`
  color: #29282c;
  font-weight: 500;
`;

const BaseInput = styled.TextInput`
  color: #29282c;
  font-weight: 500;
  min-height: 35px;
  border-width: 1px;
  border-style: solid;
  border-color: #393938;
  border-radius: 14px;
  padding: 15px;
`;

const TitleForm = styled(BaseText)`
  font-size: 24px;
  line-height: 29px;
  margin-bottom: 6px;
`;

const SubTitleForm = styled(BaseText)`
  font-size: ${(props) => props.theme.sizes?.BASE};
`;

const Form = styled(BaseInner)`
  padding-right: 37px;
  padding-left: 37px;
  padding-top: 15px;
`;

const Label = styled.View`
  position: absolute;
  left: 10px;
  z-index: 1;
`;

const GHH = styled.Text`
  background: #fff;
  padding: 0 5px;
  font-size: 14px;
  line-height: 17px;
`;

const FormControler = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
`;

const SubmitInner = styled(FormControler)`
  padding: 6px 20px 0 20px;
  align-items: center;
`;

const SubmitButton = styled.Pressable`
  background: #ef873d;
  border-radius: 14.5532px;
  text-align: center;
  align-items: center;
  padding: 15px;
  width: 100%;
  margin-top: 14px;
  margin-bottom: 12px;
`;

const SubmitButtonText = styled.Text`
  color: #fff;
  font-size: 18px;
  letter-spacing: 1.6px;
  font-weight: bold;
`;
// const ForgotPassword = styled.Text`
//   font-style: normal;
//   font-weight: bold;
//   font-size: 10px;
//   line-height: 12px;
//   text-align: center;
//   letter-spacing: 1.6px;
// `;

const Login = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: flex-end;
  color: #2b67f6;
`;

export const Register = () => {
  const navigation = useNavigation<AuthenScreenNavigationProp>();
  const loginWithFB = () => navigation.navigate(RootScreen.APP);

  return (
    <HGH onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScreenWraper>
          <Header>
            <Logo />
          </Header>
          <Content>
            <HeaderAuthenForm>
              <TitleForm>Create an account</TitleForm>
              <SubTitleForm>Start a healthy journey with us</SubTitleForm>
            </HeaderAuthenForm>
            <Form>
              <FormControler>
                <Label>
                  <GHH>Name</GHH>
                </Label>
                <BaseInput placeholder="E-Mail" />
              </FormControler>
              <FormControler>
                <Label>
                  <GHH>E-Mail</GHH>
                </Label>
                <BaseInput placeholder="E-Mail" />
              </FormControler>
              <FormControler>
                <Label>
                  <GHH>Password</GHH>
                </Label>
                <BaseInput placeholder="Password" />
              </FormControler>
              <SubmitInner>
                <SubmitButton onPress={loginWithFB}>
                  <SubmitButtonText>Sign Up</SubmitButtonText>
                </SubmitButton>
                <Pressable>
                  <Login>Log In</Login>
                </Pressable>
              </SubmitInner>
            </Form>
          </Content>
          <Footer />
        </ScreenWraper>
      </KeyboardAvoidingView>
    </HGH>
  );
};
