import { StyleSheet } from "react-native";

export default StyleSheet.create({
  taskContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 5,
    minHeight: 60,
    paddingHorizontal: 25,
    paddingVertical: 10,
    backgroundColor: "#FCFCFC",
  },
  colorContainer: {
    width: 60,
    height: 60,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  informationContainer: {
    maxWidth: 230,
    marginLeft: 15,
  },
  taskTitle: {
    fontFamily: "Poppins",
    fontSize: 16,
    color: "#333",
  },
  taskDescription: {
    fontFamily: "Poppins-Italic",
    fontSize: 12,
    color: "#999",
  },
  colorAndinformationContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtasksCountContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subtasksCount: {
    marginRight: 3,
    color: "#FFF",
  },
});
