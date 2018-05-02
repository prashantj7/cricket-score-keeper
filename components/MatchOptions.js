import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class MatchOptions extends Component {
  _handleMatchPress(item) {
    Actions.single_match({ match: item });
  }

  render() {
    return (
      <View>
        <FlatList
          data={[{ key: 0, title: 'SINGLE MATCH' }, { key: 1, title: 'TOURNAMENT' }]}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this._handleMatchPress(item)}>
              <View style={styles.flexParent}>
                <View style={styles.tile} />
                <Text style={styles.matchTypeText}>{item.title}</Text>
              </View>
              
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tile: { width: 200, height: 100, backgroundColor: '#bbbbbb' },
  matchTypeText: {
    marginTop: 10,
    fontSize: 17,
    color: '#555555',
    fontWeight: 'bold',
    letterSpacing: 2,
  },
  flexParent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 60,
  },
});
