import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class MenuButton extends Component {
  render() {
    return (
      <View>
        <View style={styles.settingsView}>
          <Text style={styles.settingsButton}>...</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  settingsView: {
    alignItems: 'flex-end',
  },
  settingsButton: {
    fontSize: 35,
    marginRight: 20,
  },
});
