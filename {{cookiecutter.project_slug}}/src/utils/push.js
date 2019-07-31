import { AsyncStorage, Alert } from "react-native";
import firebase from "react-native-firebase";

//1
export const checkPermission = async () => {
  const enabled = await firebase.messaging().hasPermission();
  if (enabled) {
    getToken();
  } else {
    requestPermission();
  }
};

//3

const getToken = async () => {
  // will use redux-persist for handling AsyncStorage
  let fcmToken = await AsyncStorage.getItem("fcmToken");
  if (!fcmToken) {
    fcmToken = await firebase.messaging().getToken();
    if (fcmToken) {
      // user has a device token
      // will use redux-persist for handling AsyncStorage
      await AsyncStorage.setItem("fcmToken", fcmToken);
    }
  }
};

//2

const requestPermission = async () => {
  try {
    await firebase.messaging().requestPermission();
    // User has authorised
    getToken();
  } catch (error) {
    // User has rejected permissions
    console.log("permission rejected");
    showAlert('App', 'Push Notification permission rejected');
  }
};

const showAlert = (title, body) => {
  Alert.alert(
    title,
    body,
    [{ text: "OK", onPress: () => console.log("OK Pressed") }],
    { cancelable: false }
  );
};
