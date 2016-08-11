/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import App from './js/app/App';

class navigation extends Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('navigation', () => navigation);
