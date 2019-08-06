import { StyleSheet } from "react-native";

import { scaleVertical, scale } from "../../../../utils/scale";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#091142"
  },
  input: {
    backgroundColor: "white",
    paddingLeft: 10,
    paddingRight: 10,
    margin: 5
  },
  button: {
    backgroundColor: "#961247",
    margin: 15
  },
  image: {
    resizeMode: "cover",
    marginBottom: scaleVertical(10)
  },
  textRow: {
    textAlign: "center"
  },
  passwordForgot: {
    textDecorationLine: "underline",
    fontSize: 18
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  }
});
