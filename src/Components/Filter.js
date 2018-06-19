import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Filter extends Component {
  getTextStyle(statusName) {
    const { myFilterStates } = this.props;
    if (statusName === myFilterStates) return { color: 'yellow', fontWeight: 'bold' };
    return styles.textStyle;
  }
  setFilterStatus(actionType) {
    this.props.dispatch({ type: actionType });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_SHOWALL')}>
          <Text style={this.getTextStyle('SHOW_ALL')}>SHOW ALL </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_MEMORIZED')}>
          <Text style={this.getTextStyle('MEMORIZED')}>MEMORIZE </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setFilterStatus('FILTER_NEED_PRACTICE')}>
          <Text style={this.getTextStyle('NEED_PRACTICE')}>NEED PRACTIVE</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
function mapStateToProps(state) {
  return { myFilterStates: state.filterStates };
}
export default connect(mapStateToProps)(Filter);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#803a02',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textStyle: {
    color: '#fff',
  }
});
