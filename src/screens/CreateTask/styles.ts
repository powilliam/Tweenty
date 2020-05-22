import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    alignItems: "center",
    backgroundColor: "#FFF",
  },
  formContainer: {
    width: "100%",
    marginTop: 50,
  },
  formHeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 25,
  },
  formHeaderTitle: {
    color: "#333",
    marginLeft: 10,
    fontSize: 18,
    fontFamily: "Poppins-Light",
  },
  formTextInput: {
    backgroundColor: "#f9f9f9",
    borderRadius: 4,
    marginBottom: 10,
    paddingHorizontal: 20,
    paddingVertical: 15,
    fontFamily: "Poppins",
    color: "#666",
    fontSize: 13,
  },
  createTaskButton: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    height: 50,
    paddingHorizontal: 25,
    marginTop: 35,
  },
  createTaskButtonText: {
    fontFamily: "Poppins",
    fontSize: 16,
  },
});
