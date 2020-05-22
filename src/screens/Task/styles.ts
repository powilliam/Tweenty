import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    backgroundColor: "#FFF",
  },
  scrollviewContainer: {
    paddingVertical: 50,
  },
  informationContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  taskTitle: {
    fontFamily: "Poppins",
    color: "#333",
    fontSize: 18,
    textAlign: "center",
  },
  taskDecription: {
    fontFamily: "Poppins",
    color: "#999",
    fontSize: 14,
    textAlign: "center",
  },
  buttonsContainer: {
    width: "100%",
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
