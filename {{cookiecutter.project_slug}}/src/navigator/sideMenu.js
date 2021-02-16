import React from "react"
import {
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  Platform,
  StyleSheet,
  Text
} from "react-native"
import { installed_blueprints } from "../config/installed_blueprints"
import Icon from "react-native-vector-icons/FontAwesome"

export default class SideMenu extends React.Component {
  onMenuItemPressed = item => {
    this.props.navigation.navigate(item.access_route)
  }

  renderIcon = () => (
    <Image
      style={styles.logo}
      source={require("../assets/images/smallLogo.png")}
      resizeMode="contain"
    />
  )

  renderMenu = () => installed_blueprints.map(this.renderMenuItem)

  renderMenuItem = item => (
    <TouchableOpacity
      style={styles.container}
      key={`${item.name}--blueprint-button`}
      activeOpacity={1}
      onPress={() => this.onMenuItemPressed(item)}
    >
      <View style={styles.content}>
        <View style={styles.content}>
          <Icon
            style={styles.icon}
            name={item.icon_name ? item.icon_name : "pencil-square-o"}
            size={24}
            color="#F88087"
          />
          <Text category="s1" style={styles.text}>
            {item.human_name}
          </Text>
        </View>
        <Icon name="chevron-right" size={24} color="#F88087" />
      </View>
    </TouchableOpacity>
  )

  render = () => (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={[styles.container, styles.content]}>
          {this.renderIcon()}
          <Text style={styles.logoText}>Crowdbotics</Text>
        </View>
        {this.renderMenu()}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: "#e4e9f2"
  },
  root: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    backgroundColor: "#e4e9f2"
  },
  content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center"
  },
  icon: {
    marginRight: 13
  },
  text: {
    color: "#151a30"
  },
  logo: {
    marginRight: 5,
    width: 32,
    height: 32
  },
  logoText: {
    color: "#151a30",
    fontSize: 20
  }
})
