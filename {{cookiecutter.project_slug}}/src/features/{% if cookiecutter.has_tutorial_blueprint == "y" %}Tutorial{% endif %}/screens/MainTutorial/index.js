/*This is an example of React Native App Intro Slider */
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";

import { styles } from "./styles";

const slides = [
  {
    key: "s1",
    text: "Intro Tutorial",
    title: "Slide 1",
    titleStyle: styles.title,
    textStyle: styles.text,
    image: require("../../../../assets/images/smallLogo.png"),
    backgroundColor: "#e74c3c"
  },
  {
    key: "s2",
    text: "Intro Tutorial 2",
    title: "Slide 2",
    titleStyle: styles.title,
    textStyle: styles.text,
    image: require("../../../../assets/images/darkThemeImage.png"),
    imageStyle: styles.image,
    backgroundColor: "#0C265D"
  },
  {
    key: "s3",
    text: "Intro Tutorial 3",
    title: "Slide 3",
    image: require("../../../../assets/images/lightThemeImage.png"),
    titleStyle: styles.title,
    textStyle: styles.text,
    imageStyle: styles.image,
    backgroundColor: "#2ecc71"
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showRealApp: false
    };
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    // todo add this state in redux store
    this.setState({ showRealApp: true });
  };

  render() {
    return (
      <AppIntroSlider
        slides={slides}
        onDone={this._onDone}
        showSkipButton={true}
        onSkip={this._onSkip}
      />
    );
  }
}