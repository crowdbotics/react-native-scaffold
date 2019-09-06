import React from 'react';
import {
  View,
  ScrollView,
  Dimensions,
  StyleSheet,
  Image,
} from 'react-native';
import {
  Text,
  Button, withStyles, Avatar, Modal
} from 'react-native-ui-kitten';
// import  {Avatar}  from '../../components/avatar';
import { Gallery } from '../../components/gallery';
import { data } from '../../data/';
import formatNumber from '../../utils/textUtils';
import NavigationType from '../../config/navigation/propTypes';
import { Ellipsis } from "../../components/ellipsis";
import { SocialBar } from "../../components/socialBar";

const dw = Dimensions.get("window").width
const dh = Dimensions.get("window").height

class _ProfileV1 extends React.Component {
  static propTypes = {
    navigation: NavigationType.isRequired,
  };
  static navigationOptions = {
    title: 'User Profile'.toUpperCase(),
  };

  state = {
    data: undefined,
  };

  constructor(props) {
    super(props);
    const id = this.props.navigation.getParam('id', 1);
    this.state.data = data.getUser(id);
  }

  

  render = () => {
    const {themedStyle} = this.props
    return (
    <ScrollView style={themedStyle.root}>
      <View style={[themedStyle.header, themedStyle.bordered]}>
        <Avatar source={this.state.data.photo} size='giant' style={{width: 100, height: 100}}/>
        <Text category='h6' style={themedStyle.text}>{`${this.state.data.firstName} ${this.state.data.lastName}`}</Text>
      </View>
      <View style={[themedStyle.userInfo, themedStyle.bordered]}>
        <View style={themedStyle.section}>
          <Text category='s1' style={themedStyle.space}>{this.state.data.postCount}</Text>
          <Text appearance='hint' category='s2'>Posts</Text>
        </View>
        <View style={themedStyle.section}>
          <Text category='s1' style={themedStyle.space}>{formatNumber(this.state.data.followersCount)}</Text>
          <Text appearance='hint' category='s2'  >Followers</Text>
        </View>
        <View style={themedStyle.section}>
          <Text category='s1' style={themedStyle.space}>{this.state.data.followingCount}</Text>
          <Text appearance='hint' category='s2' >Following</Text>
        </View>
      </View>
      <View style={themedStyle.buttons}>
        <Button style={themedStyle.button} appearance='ghost' status='danger'>FOLLOW</Button>
        <View style={themedStyle.separator} />
        <Button style={themedStyle.button} appearance='ghost' status='danger'>MESSAGE</Button>
      </View>
      <Gallery items={this.state.data.images} />

     
    </ScrollView>
  )}
}

export const ProfileV1 = withStyles(_ProfileV1, theme => ({
  root: {
    backgroundColor: theme['color-basic-100']
  },
  header: {
    alignItems: 'center',
    paddingTop: 25,
    paddingBottom: 17,
    marginTop: 20
  },
  userInfo: {
    flexDirection: 'row',
    paddingVertical: 18,
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme['color-basic-400'],
  },
  section: {
    flex: 1,
    alignItems: 'center',
  },
  space: {
    marginBottom: 3,
    color: theme['color-basic-1000']
  },
  separator: {
    backgroundColor: theme['color-basic-400'],
    alignSelf: 'center',
    flexDirection: 'row',
    flex: 0,
    width: 1,
    height: 42,
  },
  buttons: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  button: {
    flex: 1,
    alignSelf: 'center',
  },
  text: {
    color: theme['color-basic-1000']
  }
}));

