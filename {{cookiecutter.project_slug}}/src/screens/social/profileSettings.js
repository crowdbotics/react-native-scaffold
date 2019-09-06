import React from "react";
import { ScrollView, View, StyleSheet } from "react-native";
import {
  Text,
  Input,
  RkTheme,
  withStyles,
  Avatar,
  Button
} from "react-native-ui-kitten";
import { data } from "../../data";
import { SocialSetting, GradientButton } from "../../components";
import { FontAwesome } from "../../assets/icons";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

class _ProfileSettings extends React.Component {
  static navigationOptions = {
    title: "Profile Settings".toUpperCase()
  };

  user = data.getUser();

  state = {
    firstName: this.user.firstName,
    lastName: this.user.lastName,
    email: this.user.email,
    country: this.user.country,
    phone: this.user.phone,
    password: this.user.password,
    newPassword: this.user.newPassword,
    confirmPassword: this.user.confirmPassword
  };

  onFirstNameInputChanged = text => {
    this.setState({ firstName: text });
  };

  onLastNameInputChanged = text => {
    this.setState({ lastName: text });
  };

  onEmailInputChanged = text => {
    this.setState({ email: text });
  };

  onCountryInputChanged = text => {
    this.setState({ country: text });
  };

  onPhoneInputChanged = text => {
    this.setState({ phone: text });
  };

  onPasswordInputChanged = text => {
    this.setState({ password: text });
  };

  onNewPasswordInputChanged = text => {
    this.setState({ newPassword: text });
  };

  onConfirmPasswordInputChanged = text => {
    this.setState({ confirmPassword: text });
  };

  render = () => {
    const { themedStyle } = this.props;

    return (
      <KeyboardAwareScrollView contentContainerStyle={themedStyle.root}>
        <View style={themedStyle.header}>
          <Avatar
            source={this.user.photo}
            size="giant"
            style={{ width: 100, height: 100 }}
          />
        </View>
        <View style={themedStyle.section}>
          <View style={[themedStyle.row, themedStyle.heading]}>
            <Text category="h6" style={themedStyle.text}>INFO</Text>
          </View>
          <View style={themedStyle.row}>
            <Input
              label="First Name"
              value={this.state.firstName}
              onChangeText={this.onFirstNameInputChanged}
              style={this.props.themedStyle.Input}
              status='info'
              textStyle={this.props.themedStyle.text}
            />
          </View>
          <View style={themedStyle.row}>
            <Input
              label="Last Name"
              value={this.state.lastName}
              onChangeText={this.onLastNameInputChanged}
              style={this.props.themedStyle.Input}
              status='info'
              textStyle={this.props.themedStyle.text}
            />
          </View>
          <View style={themedStyle.row}>
            <Input
              label="Email"
              value={this.state.email}
              onChangeText={this.onEmailInputChanged}
              style={this.props.themedStyle.Input}
              status='info'
              textStyle={this.props.themedStyle.text}
            />
          </View>
          <View style={themedStyle.row}>
            <Input
              label="Country"
              value={this.state.country}
              onChangeText={this.onCountryInputChanged}
              style={this.props.themedStyle.Input}
              status='info'
              textStyle={this.props.themedStyle.text}
            />
          </View>
          <View style={themedStyle.row}>
            <Input
              label="Phone"
              value={this.state.phone}
              onChangeText={this.onPhoneInputChanged}
              style={this.props.themedStyle.Input}
              status='info'
              textStyle={this.props.themedStyle.text}
            />
          </View>
        </View>
        <View style={themedStyle.section}>
          <View style={[themedStyle.row, themedStyle.heading]}>
            <Text category="h6" style={themedStyle.text}>CHANGE PASSWORD</Text>
          </View>
          <View style={themedStyle.row}>
            <Input
              label="Old Password"
              value={this.state.password}
              secureTextEntry
              onChangeText={this.onPasswordInputChanged}
              style={this.props.themedStyle.Input}
              status='info'
              textStyle={this.props.themedStyle.text}
            />
          </View>
          <View style={themedStyle.row}>
            <Input
              label="New Password"
              value={this.state.newPassword}
              secureTextEntry
              onChangeText={this.onNewPasswordInputChanged}
              style={this.props.themedStyle.Input}
              status='info'
              textStyle={this.props.themedStyle.text}
            />
          </View>
          <View style={themedStyle.row}>
            <Input
              label="Confirm Password"
              value={this.state.confirmPassword}
              secureTextEntry
              onChangeText={this.onConfirmPasswordInputChanged}
              style={this.props.themedStyle.Input}
              status='info'
              textStyle={this.props.themedStyle.text}
            />
          </View>
        </View>
        <View style={themedStyle.section}>
          <View style={[themedStyle.row, themedStyle.heading]}>
            <Text category="h6" style={themedStyle.text}>CONNECT YOUR ACCOUNT</Text>
          </View>
          <View style={themedStyle.row}>
            <SocialSetting
              name="Twitter"
              icon='twitter'
              tintColor="#4F8EF7"
            />
          </View>
          <View style={themedStyle.row}>
            <SocialSetting
              name="Google"
              icon='google'
              tintColor="#4F8EF7"
            />
          </View>
          <View style={themedStyle.row}>
            <SocialSetting
              name="Facebook"
              icon='facebook'
              tintColor="#4F8EF7"
            />
          </View>
        </View>

        <Button style={themedStyle.button} status="danger" size="large">
          SAVE
        </Button>
      </KeyboardAwareScrollView>
    );
  };
}

export const ProfileSettings = withStyles(_ProfileSettings, theme => ({
  root: {
    backgroundColor: theme["color-basic-100"]
  },
  header: {
    backgroundColor: theme["color-basic-100"],
    paddingTop: 25,
    justifyContent:'center',
    alignItems: 'center'
  },
  section: {
    marginVertical: 15
  },
  heading: {
    paddingBottom: 12.5,
    
  },
  row: {
    flexDirection: "row",
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme["color-basic-400"],
    alignItems: "center",

  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32
  }, 
  text: {
    color: theme['color-basic-1000']
  },
  Input: {
    width: '100%',
    backgroundColor: theme['color-basic-100']
}
}));
