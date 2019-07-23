import React, { Component } from "react";
import { StyleSheet, Image, View, Alert, } from "react-native";
import { Text, Layout, Button } from "react-native-ui-kitten";
import LogoIcon from "../../assets/images/backgroundLoginV1.png";
import { installed_blueprints } from "../../config/installed_blueprints";
import { store } from "../../redux/store";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { SearchBar } from 'react-native-elements';


export default class MapsScreen extends Component {
  componentDidMount() {
    store.dispatch({ type: "TEST/ALO" });
  }

  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return [
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>,

      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
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
