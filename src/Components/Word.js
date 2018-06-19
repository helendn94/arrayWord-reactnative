import React, { Component } from 'react';
import { View, Text,  StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

class Word extends Component {
    memorizeWord() {
      this.props.dispatch({
        type: 'TOGGLE_MEMORIZED',
        id: this.props.myWord.id
      });
    }
    isShow() {
      this.props.dispatch({
        type: 'TOGGLE_SHOW',
        id: this.props.myWord.id
      });
    }
    render() {
        const { container, textvnstyle, controller, button } = styles;
        const { en, vn, memorized, isShow } = this.props.myWord;
        const textDecorationLine = memorized ? 'line-through' : 'none';
        const memorizedButtonText = memorized ? 'forget' : 'memorized';
        const meaning = isShow ? vn : '------';
        return (
            <View style={container}>
                <Text style={{ textDecorationLine }}>{en}</Text>
                <Text style={textvnstyle}>{meaning}</Text>
                <View style={controller}>
                    <TouchableOpacity style={button} onPress={this.memorizeWord.bind(this)}>
                      <Text>{memorizedButtonText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={button} onPress={this.isShow.bind(this)}>
                      <Text>show</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
  container: {
      backgroundColor: '#fff',
      padding: 10,
      margin: 10,
      borderRadius: 5,
  },
  textvnstyle: {
    color: '#e74c00',
  },
  controller: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 5,
  }
});
export default connect()(Word);
