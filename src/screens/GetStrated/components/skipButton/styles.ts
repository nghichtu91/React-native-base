import styled from '@Theme/styled-components';

const SkipInner = styled.View`
  align-items: flex-end;
  margin-bottom: 10px;
  /* margin-top: 10px; */
`;
const SkipBtnText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => props.theme.sizes?.BASE};
  line-height: 17px;
  letter-spacing: 1.6px;
  color: ${(props) => props.theme.colors.INFO};
`;
const SkipBtn = styled.Pressable`
  min-width: 30px;
  display: flex;
  align-items: flex-end;
`;

export { SkipBtn, SkipInner, SkipBtnText };
