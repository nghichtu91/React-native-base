import React from 'react';
import { GetStartedTextStyled, GetStartedBtn } from './styles';
import { ButtonProps } from 'react-native';

export const GetStartedButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <GetStartedBtn activeOpacity={1} onPress={onPress}>
      <GetStartedTextStyled>{title}</GetStartedTextStyled>
    </GetStartedBtn>
  );
};
