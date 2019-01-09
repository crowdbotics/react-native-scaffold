import { createStackNavigator } from 'react-navigation';

import Login from '../containers/Login';


const AuthNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null,
    },
  },
});

export default AuthNavigator;
