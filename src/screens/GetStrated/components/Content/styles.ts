import styled from '@Theme/styled-components';

export const Content = styled.View`
  flex: 5;
`;

export const BackgroundTransform = styled.View`
  height: 220px;
  width: 120%;
  background-color: #f9f6f4;
  transform: rotate(-13.66deg);
  margin-left: -50px;
  z-index: 1;
  margin-top: 35%;
  flex: 0.4;
`;

export const BackgroudAbsolute = styled.View`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  z-index: 2;
`;

export const ImageBackground = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  position: relative;
`;

export const Container = styled.View`
  width: 100%;
  height: 100%;
  position: relative;
  margin-top: 10px;
  padding-left: 30px;
  padding-right: 30px;
  flex: 1;
`;
