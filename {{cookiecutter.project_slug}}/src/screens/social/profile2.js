import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text, Button, withStyles, Avatar } from "react-native-ui-kitten";
import { Gallery } from "../../components";
import { data } from "../../data";
import { FontIcons } from "../../assets/icons";
import formatNumber from "../../utils/textUtils";
// import Icon from 'react-native-vector-icons/Ionicons';
import Icon from "react-native-vector-icons/FontAwesome5";

class _ProfileV2 extends React.Component {
  static navigationOptions = {
    title: "User Profile".toUpperCase()
  };

  state = {
    data: data.getUser()
  };

  render = () => {
    const { themedStyle } = this.props;

    return (
      <ScrollView style={themedStyle.root}>
        <View style={[themedStyle.header, themedStyle.bordered]}>
          <View style={themedStyle.row}>
            <View style={themedStyle.buttons}>
              <TouchableOpacity style={themedStyle.button}>
                <Icon name="user" size={20} color="#4F8EF7" />
              </TouchableOpacity>
            </View>
            <Avatar
              source={this.state.data.photo}
              size="giant"
              style={{ width: 100, height: 100 }}
            />
            <View style={themedStyle.buttons}>
              <TouchableOpacity style={themedStyle.button}>
                <Icon name="envelope" size={20} color="#4F8EF7" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={themedStyle.section}>
            <Text
              category="h6"
              style={themedStyle.text}
            >{`${this.state.data.firstName} ${this.state.data.lastName}`}</Text>
          </View>
        </View>
        <View style={themedStyle.userInfo}>
          <View style={themedStyle.section}>
            <Text category="s1" style={themedStyle.space}>
              {this.state.data.postCount}
            </Text>
            <Text appearance="hint" category="s2">
              Posts
            </Text>
          </View>
          <View style={themedStyle.section}>
            <Text category="s1" style={themedStyle.space}>
              {formatNumber(this.state.data.followersCount)}
            </Text>
            <Text appearance="hint" category="s2">
              Followers
            </Text>
          </View>
          <View style={themedStyle.section}>
            <Text category="s1" style={themedStyle.space}>
              {this.state.data.followingCount}
            </Text>
            <Text appearance="hint" category="s2">
              Following
            </Text>
          </View>
        </View>
        <Gallery items={this.state.data.images} />
      </ScrollView>
    );
  };
}
export const ProfileV2 = withStyles(_ProfileV2, theme => ({
  root: {
    backgroundColor: theme["color-basic-100"]
  },
  header: {
    paddingTop: 25,
    paddingBottom: 17
  },
  row: {
    flexDirection: "row"
  },
  userInfo: {
    flexDirection: "row",
    paddingVertical: 18
  },
  bordered: {
    borderBottomWidth: 1,
    borderColor: theme["color-basic-400"]
  },
  section: {
    flex: 1,
    alignItems: "center"
  },
  space: {
    marginBottom: 3,
    color: theme["color-basic-1000"]
  },
  separator: {
    backgroundColor: theme["color-basic-400"],
    alignSelf: "center",
    flexDirection: "row",
    flex: 0,
    width: 1,
    height: 42
  },
  buttons: {
    flex: 1
  },
  button: {
    marginTop: 27.5,
    alignSelf: "center",
    borderColor: theme["color-basic-400"],
    borderWidth: 2,
    padding: 15,
    // width: 44,
    // height: 44,
    borderRadius: 25
  },
  text: {
    color: theme["color-basic-1000"]
  }
}));
