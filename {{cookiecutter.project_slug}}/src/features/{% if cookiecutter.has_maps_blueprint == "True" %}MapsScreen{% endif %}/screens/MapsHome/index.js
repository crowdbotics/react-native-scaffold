import React, { Component } from "react";
import { StyleSheet, Image, View, Alert, } from "react-native";
import { Text, Layout, Button } from "react-native-ui-kitten";

import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SearchBar from "../../../../components/SearchBar";


export default class MapsScreen extends Component {

  constructor() {
    state = {
      inputValue: '',
    };
  }

  onInputValueChange = (inputValue: string) => {
    this.setState({ inputValue });
  };

  initialRegion: {
      latitude: 37.78825,
      longitude: -122.4324,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
  };

  render() {
    const { searchCoords } = this.state;

    return [
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={ initialRegion }
      >
      </MapView>,

      <Input
        value={this.state.inputValue}
        onChangeText={this.onInputValueChange}
        style={styles.Mapscontainer}
      />
    ];
  }
}

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   height: 400,
   width: 400,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});
