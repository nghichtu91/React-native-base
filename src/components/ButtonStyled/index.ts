import styled from '@Theme/styled-components';
const ButtonStyled = styled.Button``;

const Button = styled.Pressable`
  background: ${(props) => props.theme.colors.PRIMARY};
  border-radius: 14.5532px;
  text-align: center;
  align-items: center;
  padding: 15px;
  width: 100%;
`;

export { ButtonStyled, Button };
