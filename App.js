import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import App1 from './src/App1';

export default class App extends Component {
  render() {
    return (
      <App1 />
    );
  }
}
AppRegistry.registerComponent('DemoRedux2', () => App);
