import styled from "styled-components/native";

interface ContainerProps {
  backgroundColor?: string;
}

interface LabelProps {
  textColor?: string;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  width: 100%;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 50px;
  padding: 0px 25px;
  background-color: ${(props) =>
    props.backgroundColor ?? props.theme.accentColor};
`;

export const Label = styled.Text<LabelProps>`
  font-family: Poppins;
  font-size: 16px;
  color: ${(props) => props.textColor ?? "#fff"};
`;
