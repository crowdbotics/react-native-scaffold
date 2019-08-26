import React from 'react';
import { View } from 'react-native';
import { RkStyleSheet, withStyles } from 'react-native-ui-kitten';

class _Ellipsis extends React.Component {
   

  render() {
    const { themedStyle } = this.props
    return (
      <View style={themedStyle.container}>
        <View style={themedStyle.dot} />
        <View style={themedStyle.dot} />
        <View style={themedStyle.dot} />
      </View>
    );
  }
}

export const Ellipsis = withStyles(_Ellipsis, (theme) => ({

  container: {
    flexDirection: 'row',
    marginHorizontal: 5,
    marginVertical: 10,
  },
  dot: {
    height: 5.5,
    width: 5.5,
    borderRadius: 3,
    backgroundColor: theme.colors.text.base,
    marginHorizontal: 2.5,
  },
}));
