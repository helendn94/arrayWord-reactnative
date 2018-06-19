import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

 class Header extends Component {
  render() {
    const { header } = styles;
    return (
      <View style={header}>
          <Text>My Words</Text>
          <TouchableOpacity onPress={() => this.props.dispatch({ type: 'TOGGLE_IS_ADDING' })}>
              <Text>+</Text>
          </TouchableOpacity>
      </View>
    );
  }
}
export default connect()(Header);
const styles = StyleSheet.create({
  header: {
    backgroundColor: 'yellow',
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  }
});
