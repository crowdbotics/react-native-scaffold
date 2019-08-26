import React from "react";
import {
  View,
  FlatList,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";
import { Text, Button, Modal } from "react-native-ui-kitten";
import PropTypes from "prop-types";


export class Gallery extends React.Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.node).isRequired
  };

  constructor(props) {
    super(props);
    const itemSize = (Dimensions.get("window").width - 12) / 3;
    this.state = {
      data: this.props.items,
      itemSize,
      total: this.props.items.length,
      visible: false
    };
  }

  extractItemKey = index => `${index}`;



  renderItem = ({ item, index }) => (
    <React.Fragment>
      <TouchableOpacity
        onPress={() => alert('Coming soon')}
      >
        <Image
          style={{
            width: this.state.itemSize,
            height: this.state.itemSize,
            margin: 1.5
          }}
          source={item}
        />

        {/* {this.renderFooter()} */}
      </TouchableOpacity>

     
    </React.Fragment>
  );

  render = () => (
    <View style={styles.images}>
      <FlatList
        data={this.state.data}
        numColumns={3}
        keyExtractor={this.extractItemKey}
        renderItem={this.renderItem}
      />

      
    </View>
  );
}

const styles = StyleSheet.create({
  images: {
    flexDirection: "row",
    paddingHorizontal: 0.5
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: 'white'
  }
});
