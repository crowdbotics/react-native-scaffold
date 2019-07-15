import React from "react";
import { Text, Layout, Button } from "react-native-ui-kitten";
import { styles } from "./styles";

export default function ConfirmationRequired(props) {
  const handleOnPress = () => {
    const { navigation } = props;
    navigation.navigate("SplashScreen");
  };

  return (
    <Layout style={styles.screen}>
      <Text style={styles.textRow}>
        We have sent an email with a confirmation link to your email address. In
        order to complete the sign-up process, please click the confirmation
        link.
      </Text>
      <Button onPress={handleOnPress}>Return to blueprints</Button>
    </Layout>
  );
}
