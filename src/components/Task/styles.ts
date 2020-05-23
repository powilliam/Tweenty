import { StyleSheet } from "react-native";
import styled from "styled-components/native";

interface LeadingColorProps {
  backgroundColor?: string;
  marginBottom?: string;
  dimensions?: string;
}

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  min-height: 60px;
  padding: 10px 25px;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const Leading = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const LeadingColor = styled.View<LeadingColorProps>`
  width: ${(props) => props.dimensions ?? "60px"};
  height: ${(props) => props.dimensions ?? "60px"};
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  margin-bottom: ${(props) => props.marginBottom ?? "0px"};
  background-color: ${(props) => props.backgroundColor ?? "#FFF"};
`;

export const Informations = styled.View`
  max-width: 230px;
  margin-left: 15px;
`;

export const Title = styled.Text`
  font-family: Poppins;
  font-size: 16px;
  color: ${(props) => props.theme.textColor};
`;

export const Description = styled.Text`
  font-family: Poppins-Italic;
  font-size: 12px;
  color: ${(props) => props.theme.subtextColor};
`;

export const ModalFooter = styled.View`
  padding: 10px 25px;
`;

export default StyleSheet.create({
  modalContainer: {
    flex: 1,
  },
  buttonsContainer: {
    paddingHorizontal: 25,
    marginBottom: 25,
    width: "100%",
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
