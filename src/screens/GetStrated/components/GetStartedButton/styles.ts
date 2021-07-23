import styled from '@Theme/styled-components';
import { normalize } from '@Utils/scaleUtil';

export const GetStartedTextStyled = styled.Text`
  color: ${(props) => props.theme.colors?.WHITE};
  font-size: ${(props) => props.theme.sizes?.H6};
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  text-align: center;
  letter-spacing: 1.6px;
`;

export const GetStartedBtn = styled.TouchableOpacity`
  background-color: ${(props) => props.theme.colors.PRIMARY};
  padding: ${normalize(10) + 'px'};
  align-items: center;
  border-radius: 14.55px;
`;
