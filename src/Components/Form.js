import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import { connect } from 'react-redux';
const { width, height } = Dimensions.get('window');
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      en: '',
      vn: '',
    };
    this.onAdd = this.onAdd.bind(this);
  }
  onAdd() {
    const { en, vn } = this.state;
    this.props.dispatch({
      type: 'ADD_WORD',
      en,
      vn
    });
  }
  render() {
    const { InputStyle, container, buttonStyle } = styles;
    return (
        <View style={container}>
          <TextInput
            style={InputStyle}
            value={this.state.en}
            onChangeText={text => this.setState({ en: text })}
            placeholder="English word"
          />
          <TextInput
            style={InputStyle}
            value={this.state.vn}
            onChangeText={text => this.setState({ vn: text })}
            placeholder="Vietname word"
          />
          <TouchableOpacity style={buttonStyle} onPress={this.onAdd()}>
              <Text style={{ fontSize: 25, color: '#fff' }}>Adding</Text>
          </TouchableOpacity>
        </View>
    );
  }
}
export default connect()(Form);
const styles = StyleSheet.create({
  container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  InputStyle: {
      height: 40,
      width: width - 20,
      backgroundColor: '#d1d1d1',
      margin: 10,
      paddingHorizontal: 10,
      borderRadius: 10,
  },
  buttonStyle: {
    backgroundColor: '#e36c0b',
    height: 40,
    width: width - 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  }
});
