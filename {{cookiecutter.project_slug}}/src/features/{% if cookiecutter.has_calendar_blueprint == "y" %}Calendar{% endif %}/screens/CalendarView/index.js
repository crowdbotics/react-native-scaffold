import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View } from "react-native";
import { Agenda } from "react-native-calendars";
import moment from "moment";

import * as actions from "../../redux/actions";
import { styles } from "./styles";

class CalendarView extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.getEventsFromGoogleCalendar();
  }

  render() {
    return (
      <Agenda
        items={this.props.events}
        // todo add dinamic change on month with below function
        // loadItemsForMonth={this.loadItems.bind(this)}
        selected={moment(Date.now()).format("YYYY-MM-DD")}
        renderItem={this.renderItem.bind(this)}
        renderEmptyDate={() => null}
        //for speed reasons reasaons, nothing to do with functionality
        rowHasChanged={(r1, r2) => r1.name !== r2.name}
      />
    );
  }

  renderItem(item) {
    return (
      <View style={[styles.item, { height: item.height }]} key={item.uuid}>
        <Text>{item.name}</Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: {
    getEventsFromGoogleCalendar: () => {
      dispatch(actions.getEventsFromGoogleCalendar());
    }
  }
});

const mapStateToProps = state => ({ events: state.Calendar.events });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarView);
