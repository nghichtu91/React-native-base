import { ViewProps } from 'react-native';
import React from 'react';
import styled from '../../theme/styled-components';

const SafeAreaViewStyled = styled.SafeAreaView`
  display: flex;
  flex: 1;
  /* margin-left: 30px;
  margin-right: 30px; */
  background-color: #fff;
`;
export const ScreenWraper: React.FC<ViewProps> = ({ children }) => {
  return <SafeAreaViewStyled>{children}</SafeAreaViewStyled>;
};
