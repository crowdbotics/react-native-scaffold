import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import _ from 'lodash';
import {
  withStyles,
  Text,
  Input,
  Avatar
} from 'react-native-ui-kitten';
import { data } from '../../data';
// import { Avatar } from '../../components/avatar';
import { FontAwesome } from '../../assets/icons';
import NavigationType from '../../config/navigation/propTypes';

class _Contacts extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'Contacts'.toUpperCase(),
  };

  state = {
    data: {
      original: data.getUsers(),
      filtered: data.getUsers(),
    },
  };

  extractItemKey = (item) => `${item.id}`;

  onSearchInputChanged = (event) => {
    const pattern = new RegExp(event.nativeEvent.text, 'i');
    const contacts = _.filter(this.state.data.original, contact => {
      const filterResult = {
        firstName: contact.firstName.search(pattern),
        lastName: contact.lastName.search(pattern),
      };
      return filterResult.firstName !== -1 || filterResult.lastName !== -1 ? contact : undefined;
    });
    this.setState({
      data: {
        original: this.state.data.original,
        filtered: contacts,
      },
    });
  };

  onItemPressed = (item) => {
    this.props.navigation.navigate('ProfileV1', { id: item.id });
  };

  renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => this.onItemPressed(item)}>
      <View style={this.props.themedStyle.container}>
   
        <Avatar source={item.photo} size='giant' style={this.props.themedStyle.avatar}/>
        <Text category='s1' style={this.props.themedStyle.text}>{`${item.firstName} ${item.lastName}`}</Text>
      </View>
    </TouchableOpacity>
  );

  renderSeparator = () => (
    <View style={this.props.themedStyle.separator} />
  );


  renderHeader = () => (
    <View style={this.props.themedStyle.searchContainer}>
      <Input
        autoCapitalize='none'
        autoCorrect={false}
        onChange={this.onSearchInputChanged}
        status='info'
        placeholder='Search'
        style={this.props.themedStyle.Input}
      />
    </View>
  );

  render = () => (
    <FlatList
      style={this.props.themedStyle.root}
      data={this.state.data.filtered}
      renderItem={this.renderItem}
      ListHeaderComponent={this.renderHeader}
      ItemSeparatorComponent={this.renderSeparator}
      keyExtractor={this.extractItemKey}
      enableEmptySections
      
    />
  )
}

export const Contacts = withStyles(_Contacts, theme => ({

  root: {
    backgroundColor: theme['color-basic-100'],
    marginTop: 20,
  },
  searchContainer: {
    backgroundColor: theme['color-basic-400'],
    // paddingHorizontal: 16,
    padding: 10,
    // height: 60,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  avatar: {
    marginRight: 16,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: theme['color-basic-400'],
  },
  text: {
    color: theme['color-basic-1000']
  },
  Input: {
  
      backgroundColor: theme['color-basic-100']
  }
}));
