import styled from '@Theme/styled-components';

export const BaseInput = styled.TextInput`
  color: #29282c;
  font-weight: 500;
  min-height: 35px;
  border-width: 1px;
  border-style: solid;
  border-color: #393938;
  border-radius: 14px;
  padding: 15px;
`;

export const LabelInner = styled.View`
  position: absolute;
  left: 10px;
  z-index: 1;
`;

export const LabelText = styled.Text`
  background: #fff;
  padding: 0 5px;
  font-size: 14px;
  line-height: 17px;
`;

export const Item = styled.View`
  padding-top: 10px;
  padding-bottom: 10px;
`;
