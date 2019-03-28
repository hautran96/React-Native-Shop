import React, {Component} from 'react';
import {View} from 'react-native';
import {Router} from 'react-native-router-flux'
import Routes from './routes'
export default class App extends Component {
  render() {
    return (
      <Router>
         {Routes}
      </Router>
    );
  }
}
