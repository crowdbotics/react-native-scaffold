import React, { Component } from "react";
import { StyleSheet, Image, ScrollView, Alert } from "react-native";
import { Text, Layout, Button } from "react-native-ui-kitten";
import LogoIcon from "../../assets/images/backgroundLoginV1.png";
import { installed_blueprints } from "../../config/installed_blueprints";

export default class App extends Component {
  renderItem(item) {
    return installed_blueprints.map(item => {
      if (item.hasOwnProperty("access_route")) {
        return (
          <Button
            key={`${item}-button`}
            onPress={_ => {
              // todo add redirection
            }}
            style={styles.item}
          >
            {item.human_name}
          </Button>
        );
      }
    });
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={LogoIcon} style={styles.logo} />
        <Text style={styles.mainText}>Installed blueprints</Text>
        {this.renderItem()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  mainText: { fontSize: 20 },
  item: {
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: "gray"
  }
});
