import { StyleSheet } from "react-native";

import { scaleVertical, scale } from "../../../../utils/scale";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column"
  },
  input: {
    // paddingLeft: 10,
    // paddingRight: 10,
    // paddingTop: scaleVertical(12),
    // paddingBottom: scaleVertical(10)
  },

  image: {
    resizeMode: "cover",
    marginBottom: scaleVertical(10)
  },

  textRow: {
    textAlign: "center"
    // marginBottom: scaleVertical(22)
  }
});