import React from 'react';
import {
  FlatList,
  View,
  Image,
} from 'react-native';
import { withStyles, Text, Avatar } from 'react-native-ui-kitten';
// import { Avatar } from '../../components/avatar';
import { data } from '../../data';

const moment = require('moment');

class _Notifications extends React.Component {
  static navigationOptions = {
    title: 'Notifications',
  };

  state = {
    data: data.getNotifications(),
  };

  extractItemKey = (item) => `${item.id}`;

  renderAttachment = (item) => {
    const hasAttachment = item.attach !== undefined;
    return hasAttachment ? <View /> : <Image style={this.props.themedStyle.attachment} source={item.attach} />;
  };

  renderItem = ({ item }) => (
    <View style={this.props.themedStyle.container}>
      
      <Avatar source={item.user.photo} size='giant' style={this.props.themedStyle.avatar}/>

     

      <View style={this.props.themedStyle.content}>
        <View style={this.props.themedStyle.mainContent}>
          <View style={this.props.themedStyle.text}>
            <Text>
              <Text category='s1' style={this.props.themedStyle.text}>{`${item.user.firstName} ${item.user.lastName}`}</Text>
              <Text category='p2' style={this.props.themedStyle.text}> {item.description}</Text>
            </Text>
          </View>
          <Text
          category='c1' appearance='hint' style={this.props.themedStyle.textTime}>{moment().add(item.time, 'seconds').fromNow()}
          </Text>
        </View>
        {this.renderAttachment(item)}
      </View>
    </View>
  );

  render = () => (
    <FlatList
      style={this.props.themedStyle.root}
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
    />
  );
}

export const Notifications = withStyles(_Notifications, theme => ({

  root: {
    backgroundColor: theme['color-basic-100'],
    marginTop: 20,
  },
  container: {
    padding: 16,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: theme['color-basic-400'],
    alignItems: 'flex-start',
  },
  avatar: {

  },
  
  text: {
    marginBottom: 5,
  },
  content: {
    flex: 1,
    marginLeft: 16,
    marginRight: 0,
  },
  mainContent: {
    marginRight: 5,
  },
  img: {
    height: 50,
    width: 50,
    margin: 0,
  },
  attachment: {
    position: 'absolute',
    right: 0,
    height: 50,
    width: 50,
  },
  text: {
    color: theme['color-basic-1000']
  },
  textTime: {
    color: theme['color-basic-600'],
    marginTop: 5,
  }
}));
