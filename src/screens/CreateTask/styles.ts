import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  padding: 50px 25px;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Form = styled.View`
  width: 100%;
  margin-bottom: 50px;
`;

export const FormHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 25px;
`;

export const FormHeaderTitle = styled.Text`
  margin-left: 10px;
  font-size: 18px;
  font-family: Poppins-Light;
  color: ${(props) => props.theme.textColor};
`;

export const Input = styled.TextInput`
  background-color: #f5f5f5;
  border-radius: 6px;
  margin-bottom: 10px
  padding: 0px 25px;
  height: 50px;
  font-family: Poppins
  color: ${(props) => props.theme.subtextColor};
  font-size: 13px
`;
