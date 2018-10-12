import React, { Component } from 'react';
import Judul from './Components/Judul.js';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  Image
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Login from './welcome-page/Login';
import Biodata from './Components/Biodata';

const AppNavigator = StackNavigator({
  LoginScreen: { screen: Login },
  BiodataScreen: { screen: Biodata }
});

export default class App extends Component {
  render() {
    return (
  
      <AppNavigator />
	
    );
  }
}