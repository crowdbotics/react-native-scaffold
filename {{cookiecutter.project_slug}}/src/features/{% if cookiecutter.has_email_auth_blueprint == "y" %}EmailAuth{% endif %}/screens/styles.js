import { StyleSheet } from "react-native";

import { scaleVertical, scale } from "../../../utils/scale";


export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'white'
  },
  input: {
    backgroundColor: 'white',
    marginLeft: scale(10),
    marginRight: scale(10),
    marginTop: scaleVertical(5),
    marginBottom: scaleVertical(5),
    borderRadius: 12,
    borderColor: '#E5E5E5',
  },

  actionButon:{
    backgroundColor: '#ED6854',
    borderWidth:0,
    marginLeft: scale(10),
    marginRight: scale(10),
    paddingTop: scaleVertical(15),
    paddingBottom: scaleVertical(15),
    marginTop: scaleVertical(10),
    marginBottom: scaleVertical(10),
    borderRadius: 12
  },

  image: {
    resizeMode: "cover",
    marginBottom: scale(10)
  },

  textRow: {
    textAlign: "center",
    color: 'black'
  },

  boldText:{
    fontWeight: 'bold'
  },
  buttons: {
    flexDirection: 'row',
    marginBottom: scaleVertical(24),
    justifyContent: 'center',
  },
  button: {
    marginHorizontal: 14,
    marginTop: 27.5,
    alignSelf: "center",
    borderColor: '#ED6854',
    borderWidth: 2,
    padding: 15,
    borderRadius: 32,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: 'black',
  }
});