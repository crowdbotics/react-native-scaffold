import React from "react";
import { View, ScrollView } from "react-native";
import { withStyles, Text, Button, Avatar } from "react-native-ui-kitten";
import { Gallery, GradientButton } from "../../components";
import { data } from "../../data";
import formatNumber from "../../utils/textUtils";

class _ProfileV3 extends React.Component {
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
          <Avatar
            source={this.state.data.photo}
            size="giant"
            style={{ width: 100, height: 100 }}
          />
          <Text category='h6' style={themedStyle.text}>{`${this.state.data.firstName} ${this.state.data.lastName}`}</Text>
          <Button style={themedStyle.button} status='danger'>FOLLOW</Button>
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
export const ProfileV3 = withStyles(_ProfileV3, theme => ({
  root: {
    backgroundColor: theme["color-basic-100"]
  },
  header: {
    alignItems: "center",
    paddingTop: 25,
    paddingBottom: 17
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
    color: theme['color-basic-1000']
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
    flexDirection: "row",
    paddingVertical: 8
  },
  button: {
    marginTop: 18,
    alignSelf: "center",
    width: 140
  },
  text: {
    color: theme['color-basic-1000']
  }
}));
