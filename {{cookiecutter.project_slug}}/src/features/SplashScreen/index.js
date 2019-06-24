import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  Dimensions,
  FlatList,
  Button,
  View
} from "react-native";
import LogoIcon from "../../assets/images/logo.png";
import installedBlueprints from "../../fixtures/installedBlueprints";

const dm = Dimensions.get("screen");

export default class App extends Component {
  renderItem(item) {
    if (item.hasOwnProperty("access_route")) {
      return <Button title={item.human_name} style={styles.item} />;
    }

    return (
      <View style={styles.item}>
        <Text>- {item.human_name}</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text>Alooo</Text>
        <Image source={LogoIcon} style={styles.logo} resizeMode="contain" />
        <FlatList
          data={installedBlueprints}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  logo: {
    marginTop: 50,
    width: dm.width * 0.6,
    height: dm.width * 0.6
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "gray"
  }
});
