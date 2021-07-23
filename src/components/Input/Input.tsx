import React from 'react';
import { LabelInner, BaseInput, Item, LabelText } from './InputStyled';
import { TextInputProps } from 'react-native';

interface InputItemProps {
  label?: string | React.ReactNode;
  inputProps?: TextInputProps;
  layout?: string;
}

export const InputItem: React.FC<InputItemProps> = ({ inputProps, label }) => {
  return (
    <Item>
      <LabelInner>
        <LabelText>{label}</LabelText>
      </LabelInner>
      <BaseInput {...inputProps} />
    </Item>
  );
};
