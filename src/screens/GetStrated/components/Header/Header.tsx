import React from 'react';
import { ViewProps } from 'react-native';
import { Header as HeaderStyed } from './styles';

export const Header: React.FC<ViewProps> = ({ children }) => {
  return <HeaderStyed>{children}</HeaderStyed>;
};
