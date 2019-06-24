import React, { Component } from "react";
import { View } from "react-native";
import SplashScreen from "./src/features/SplashScreen";

export default class App extends Component {
  render() {
    return (
      <View>
        <SplashScreen />
      </View>
    );
  }
}
