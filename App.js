import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
//import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-elements'; // Version can be specified in package.json

import { Router, Scene } from 'react-native-router-flux';
import { Provider } from "react-redux";
import matchStore from "./src/store";
import HomeScreen from './src/screens/Home';
import SingleMatchInn1Screen from './src/screens/SingleMatch_Inn1';
import SingleMatchInn2Screen from './src/screens/SingleMatch_Inn2';


export default class App extends Component {
  render() {
    return (
      <Provider store={matchStore}><Router>
      <Scene key="root" hideNavBar initial>
        <Scene key="match_list" component={HomeScreen} />
        <Scene key="single_match_inn1" component={SingleMatchInn1Screen} />
        <Scene key="single_match_inn2" component={SingleMatchInn2Screen} />
      </Scene>
    </Router></Provider>
    );
  }
}


const styles = StyleSheet.create({
});
