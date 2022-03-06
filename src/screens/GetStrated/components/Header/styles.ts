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
  /* font-weight: bold;
  text-align: center;
  line-height: ${normalize(34) + 'px'};
  display: flex;
  align-items: flex-end;
  margin-bottom: ${normalize(20) + 'px'}; */
`;

export const HeaderTipSecond = styled.Text`
  /* text-align: center;
  line-height: ${normalize(17) + 'px'};
  align-items: center;
  text-align: center;
  display: flex;
  opacity: 0.65; */
`;
