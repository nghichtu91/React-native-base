import React from 'react';
import { ButtonProps } from 'react-native';
import { SkipBtn as SkipBtnStyled, SkipInner, SkipBtnText } from './styles';

export const SkipButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <SkipInner>
      <SkipBtnStyled onPress={onPress}>
        <SkipBtnText>{title}</SkipBtnText>
      </SkipBtnStyled>
    </SkipInner>
  );
};
