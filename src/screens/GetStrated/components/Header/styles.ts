import styled from '@Theme/styled-components';
import { normalize } from '@Utils/scaleUtil';

export const Header = styled.View`
  flex: 1.5;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  margin-bottom: 13px;
`;

export const HeaderTipOne = styled.Text`
  font-weight: bold;
  font-size: ${(props) => props.theme.sizes?.H3};
  text-align: center;
  line-height: ${normalize(34) + 'px'};
  display: flex;
  align-items: flex-end;
  color: ${(props) => props.theme.colors.BLACK};
  margin-bottom: ${normalize(20) + 'px'};
`;

export const HeaderTipSecond = styled.Text`
  font-size: ${(props) => props.theme.sizes?.BASE};
  color: ${(props) => props.theme.colors.BLACK};
  text-align: center;
  line-height: ${normalize(17) + 'px'};
  align-items: center;
  text-align: center;
  display: flex;
  opacity: 0.65;
`;
