import React, { Component } from "react";
import { StyleSheet, Image, View, Alert, TouchableOpacity, ScrollView, FlatList} from "react-native";
import { Text, Input, Button } from "react-native-ui-kitten";

import MapView, { Marker, Callout, CalloutSubview, ProviderPropType, PROVIDER_GOOGLE } from 'react-native-maps';

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };

  render() {
    const textColor = this.props.selected ? 'red' : 'black';
    return (
      <TouchableOpacity onPress={this._onPress}>
        <View>
          <Text style={ {color: textColor}}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}


export default class MapsScreen extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
      selected: (new Map(): Map<string, boolean>),
      places: [
        {
          "userId": 1,
          "id": 1,
          "title": "Treasure Island",

        },
        {
          "userId": 1,
          "id": 2,
          "title": "UC Berkeley",
        },
      ]
    }
    this.arrayholder = [
      {
        "userId": 1,
        "id": 1,
        "title": "Treasure Island",
      },
      {
        "userId": 1,
        "id": 2,
        "title": "UC Berkeley",
      },
    ];

  }
  _keyExtractor = (item, index) => item.id;

  _onPressItem = (id: string) => {
    const { navigation } = this.props;
    navigation.navigate("Maps", {
      id: id
    });
  };

  _renderItem = ({item}) => (
    <MyListItem
      id={item.id}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.id)}
      title={item.title}
    />
  );

  onInputValueChange = (inputValue: string) => {
    this.setState({ inputValue });
  };

  SearchFilterFunction(inputValue) {
    //passing the inserted text in textinput
    const newData = this.arrayholder.filter(function(item) {
      //applying filter for the inserted text in search bar
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = inputValue.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });

    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      places: newData,
      inputValue: inputValue,
    });
  }

  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={ {
          height: 0.3,
          width: '90%',
          backgroundColor: '#080808',
        }}
      />
    );
  };

  render() {

    const { navigation } = this.props;
    // this.arrayholder = this.state.places;

    return (
      <View style={styles.viewStyle}>
        <Input
          style={styles.searchbar}
          value={this.state.inputValue}
          placeholder="Search Here"
          onChangeText = {inputValue => this.SearchFilterFunction(inputValue)}
        />
        <FlatList
          data={this.state.places}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({ item }) => (
            <Text style={styles.textStyle}>{item.title}</Text>
          )}
          enableEmptySections={true}
          style={ { marginTop: 10 }}
          keyExtractor={(item, index) => index}
          renderItem={this._renderItem}
        />

      </View>

    );
  }


}

const styles = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    flex: 1,
    marginTop: 40,
    padding: 16,
  },
  mainText: { fontSize: 20, fontFamily: "Roboto-Medium" },
  item: {
    borderBottomWidth: 1,
    marginTop: 20,
    borderBottomColor: "gray"
  },
  searchbar: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    alignSelf: 'center',
  },
  textStyle: {
    padding: 10,
    color: "black"
  },
});
