import React, { Component } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-ui-kitten";

import { installed_blueprints } from "../../config/installed_blueprints";
import { store } from "../../redux/store";
import { styles } from './styles'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class App extends Component {

  static navigationOptions = {
    title: 'Installed blueprints',
  };

  componentDidMount() {
    store.dispatch({ type: "TEST/ALO" });
  }

  renderItems(item) {
    const {
      navigation: { navigate }
    } = this.props;

    return installed_blueprints.map(item => {
      if (item.hasOwnProperty("access_route")) {
        return (

          <TouchableOpacity onPress={_ => navigate(item.access_route)}
            style={styles.item} key={`${item.name}--blueprint-button`}
          >
            <Icon style={styles.itemLogo} name={item.icon_name} size={40} color="#F88087" />
            <Text style={styles.itemFont}>{item.human_name}</Text>
          </TouchableOpacity>
        );
      }
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.itemsContainer}>
        {this.renderItems()}
      </ScrollView>
    );
  }
}
