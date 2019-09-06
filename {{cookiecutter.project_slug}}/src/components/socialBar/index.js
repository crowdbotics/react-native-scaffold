import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { styled, Button, Text } from "react-native-ui-kitten";
import { FontAwesome } from "../../assets/icons";
import Icon from "react-native-vector-icons/FontAwesome5";

export class SocialBar extends React.Component {
  typeMapping = {
    container: {},
    section: {},
    icon: {},
    label: {}
  };
  static data = {
    likes: 18,
    comments: 26,
    shares: 5
  };

  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes || SocialBar.data.likes,
      comments: this.props.comments || SocialBar.data.comments,
      shares: this.props.shares || SocialBar.data.shares
    };
  }

  onLikeButtonPressed = () => {
    const defaultCount = SocialBar.data.likes;
    this.setState({
      likes:
        this.state.likes === defaultCount ? this.state.likes + 1 : defaultCount
    });
  };

  onCommentButtonPressed = () => {
    const defaultCount = SocialBar.data.comments;
    this.setState({
      comments:
        this.state.comments === defaultCount
          ? this.state.comments + 1
          : defaultCount
    });
  };

  onShareButtonPressed = () => {
    const defaultCount = SocialBar.data.shares;
    this.setState({
      shares:
        this.state.shares === defaultCount
          ? this.state.shares + 1
          : defaultCount
    });
  };

  render() {
    const { container, section, icon, label } = styles;

    const likes = this.state.likes + (this.props.showLabel ? " Likes" : "");
    const comments =
      this.state.comments + (this.props.showLabel ? " Comments" : "");
    const shares = this.state.shares + (this.props.showLabel ? " Shares" : "");

    return (
      <View style={container}>
        <TouchableOpacity onPress={this.onLikeButtonPressed} style={section}>
          <Icon name="heart" size={20} color="#4F8EF7" />
          <Text category="p1" appearance="hint" style={label}>
            {likes}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onCommentButtonPressed} style={section}>
          <Icon name="comment" size={20} color="#4F8EF7" />
          <Text category="p4" appearance="hint" style={label}>
            {comments}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.onShareButtonPressed} style={section}>
          <Icon name="share-alt" size={20} color="#4F8EF7" />
          <Text category="p4" appearance="hint" style={label}>
            {shares}
          </Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  section: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    height: 30
  },
  icon: {
    fontSize: 20
  },
  label: {
    marginLeft: 8,
    color: 'grey'
    //alignSelf: "flex-end"
  }
});
