import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200
  },
  text: {
    color: "#FFFFFF",
    fontSize: 20
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "transparent",
    textAlign: "center",
    marginTop: 16
  }
});

const slides = [
  {
    key: "somethun",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../../../../assets/images/darkThemeImage.png"),
    backgroundColor: "#59b2ab"
  },
  {
    key: "somethun-dos",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../../../../assets/images/backgroundLoginV1.png"),
    backgroundColor: "#febe29"
  },
  {
    key: "somethun1",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../../../../assets/images/backgroundLoginV1.png"),
    backgroundColor: "#22bcb5"
  }
];

class Tutorial extends React.Component {
  constructor() {
    super();
    this.state = {
      // todo migrate this boolean to redux saga so we can persist user selection
      showRealApp: false
    };
  }

  _renderItem = item => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  render() {
    return (
      <AppIntroSlider
        renderItem={this._renderItem}
        slides={slides}
        onDone={this._onDone}
      />
    );
  }
}

export default Tutorial;
