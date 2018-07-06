import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import MenuButton from './../components/elements/MenuButton';
import MatchOptions from './../components/MatchOptions';
import HalfModal from './../components/elements/HalfModal';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.page}>
        <MenuButton />

        <View style={styles.headerContainer}>
          <Text style={styles.textStyle}>START GAME</Text>
        </View>
        <MatchOptions />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    height: '100%',
    paddingTop: Constants.statusBarHeight,
  },
  headerContainer: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    paddingTop: 15,
  },
  textStyle: {
    fontSize: 16,
    color: '#888888',
  },
});
