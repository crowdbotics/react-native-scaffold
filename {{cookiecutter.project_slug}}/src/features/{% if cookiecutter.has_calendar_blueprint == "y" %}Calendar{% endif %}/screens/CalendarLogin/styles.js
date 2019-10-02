import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: 'white',
  },
  signInContainer:{
    backgroundColor: 'white',
  },
  textRow: {
    textAlign: "center",
    color: 'black',
    fontSize: 24,
    padding: 15,
  },
  loginButton: { width: 192, height: 48, alignSelf: "center" }
});
