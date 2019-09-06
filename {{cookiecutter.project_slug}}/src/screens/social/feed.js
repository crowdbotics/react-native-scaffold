import React from "react";
import { FlatList, View, Image } from "react-native";
import { Text, withStyles, Avatar } from "react-native-ui-kitten";

import { SocialBar } from "../../components/socialBar";
import { data } from "../../data";

const moment = require("moment");

class _Feed extends React.Component {
  static navigationOptions = {
    title: "Feed".toUpperCase()
  };

  state = {
    data: data.getArticles("post")
  };

  extractItemKey = item => `${item.id}`;

  renderItem = ({ item }) => (
    <View style={this.props.themedStyle.card}>
      <View style={this.props.themedStyle.cardHeader}>
        <Avatar
          source={item.user.photo}
          size="small"
          style={this.props.themedStyle.avatar}
        />
        <View>
          <Text
            category="s1"
            style={this.props.themedStyle.text}
          >{`${item.user.firstName} ${item.user.lastName}`}</Text>
          <Text
            category="c1"
            appearance="hint"
            style={this.props.themedStyle.textTime}
          >
            {moment()
              .add(item.time, "seconds")
              .fromNow()}
          </Text>
        </View>
      </View>
      <View style={this.props.themedStyle.cardImage}>
        <Image
          style={this.props.themedStyle.image}
          source={item.photo}
          resizeMode="contain"
        />
      </View>
      <View style={this.props.themedStyle.cardContent}>
        <Text category="p1" style={this.props.themedStyle.text}>
          {item.text}
        </Text>
      </View>
      <View style={this.props.themedStyle.cardBottom}>
        <SocialBar />
      </View>
    </View>
  );

  render = () => (
    <FlatList
      data={this.state.data}
      renderItem={this.renderItem}
      keyExtractor={this.extractItemKey}
      style={this.props.themedStyle.container}
    />
  );
}

export const Feed = withStyles(_Feed, theme => ({
  container: {
    backgroundColor: theme["color-basic-400"],
    paddingVertical: 8,
    paddingHorizontal: 10,
    marginTop: 20
  },
  card: {
    marginVertical: 8,
    backgroundColor: theme["color-basic-100"]
    //maxHeight: 520
  },
  cardHeader: {
    padding: 10,
    flexDirection: "row"
  },
  cardContent: {
    padding: 10
  },
  cardBottom: {
    padding: 10,
    width: "100%",
    Height: 100
  },
  avatar: {
    marginRight: 16
  },
  text: {
    color: theme["color-basic-1000"]
  },
  textTime: {
    color: theme["color-basic-600"]
    // marginTop: 5,
  },
  image: {
    width: "100%",
    // minHeight: 220,
    maxHeight: 220
  },
  cardImage: {
    maxHeight: 220,
  },

}));
