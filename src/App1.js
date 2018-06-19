import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Main from '../src/Components/Main';
import store from './redux/store';

export default class App1 extends Component {
    render() {
        return (
            <Provider store={store}>
              <Main />
            </Provider>
        );
    }
}
