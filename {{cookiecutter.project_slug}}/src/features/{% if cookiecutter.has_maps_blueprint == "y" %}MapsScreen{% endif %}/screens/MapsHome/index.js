import React, { Component } from "react";
import { StyleSheet, Image, View, Alert, TouchableOpacity } from "react-native";
import { Text, Input, Button } from "react-native-ui-kitten";

import MapView, { Marker, Callout, CalloutSubview, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';

export default class MapsScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      region: { //customize where you want the maps to start
          latitude: 37.871850,
          longitude: -122.259826,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
      },
    };
    this.changePosition = this.changePosition.bind(this);
    this.goToSearch = this.goToSearch.bind(this);
  }

  changePosition(latitude, longitude) {
    this.map.animateCamera({ heading: 0, center: {latitude, longitude}, pitch: 0 });
  }

  goToSearch() {
    const { navigation } = this.props;
    navigation.navigate("SearchScreen");
  }

  render() {
    const { region, markers } = this.state;
    const { navigation } = this.props;
    const id = navigation.getParam('id', 'Default');
    if(id == '1') {
      this.changePosition(37.822894, -122.370446);
    };
    if(id == '2') {
      this.changePosition(37.871850, -122.259826);
    };

    return [
      <MapView
        ref={el => (this.map = el)}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={ region }
      >
      <Marker
        ref={ref => {
          this.marker1 = ref;
        }}
        coordinate={ {
            latitude: 37.871850,
            longitude: -122.259826,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
        }}
        title="This is the title."
        description="This is the description."
      />
      <Marker
        ref={ref => {
          this.marker1 = ref;
        }}
        coordinate={ {
            latitude: 37.822894,
            longitude: -122.370446,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
        }}
        title="Treasure Island"
        description="You can find this marker via the Searchbar."
      />
      </MapView>,
      <TouchableOpacity
        onPress={this.goToSearch}
        style={styles.button}
      >
        <Text>Search...</Text>
      </TouchableOpacity>,
    ];
  }
}

const styles = StyleSheet.create({
  map: {
   ...StyleSheet.absoluteFillObject,
  },
  button: {
    marginTop: 15,
    alignSelf: 'center',
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    borderRadius: 10,
  },
});
