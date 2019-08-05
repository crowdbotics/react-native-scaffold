import React, { Component } from "react";
import { StyleSheet, Image, View, Alert } from "react-native";
import { Text, Input } from "react-native-ui-kitten";

import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default class MapsScreen extends Component {
  constructor(props) {
    super(props);
  }

  region: {
    //customize where you want the maps to start
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  render() {
    return [
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={this.region}
      />,

      <Input style={styles.searchbar} placeholder="Search..." />
    ];
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  searchbar: {
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "white"
  }
});
