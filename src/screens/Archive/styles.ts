import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.backgroundColor};
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-family: Poppins-Light;
  align-self: center;
  color: ${(props) => props.theme.subtextColor};
  font-size: 12px;
`;

export default StyleSheet.create({
  taskListContainer: {
    paddingTop: 5,
    paddingBottom: 80,
  },
});
