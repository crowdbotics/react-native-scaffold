import { StyleSheet } from "react-native";

import { scaleVertical, scale } from "../../../../utils/scale";

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    resizeMode: "cover",
    marginBottom: scaleVertical(10)
  },

  textRow: {
    textAlign: "center"
  }
});
