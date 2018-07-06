import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class MatchOptions extends Component {
  _handleMatchPress(item) {
    Actions.single_match_inn1({ match: item });
  }

  render() {
    return (
      <View>
        <FlatList
          data={[{ id: '0', title: 'SINGLE MATCH', img_url: require('./../../assets/single-match-icon.png')},
                 { id: '1', title: 'TOURNAMENT', img_url: 
                 require('./../../assets/tournamenticon.png')},
                ]}
          keyExtractor={ item => item.id }
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => this._handleMatchPress(item)}>
              <View style={styles.flexParent}>
                <Image
                  style={{ width: 200, height: 100, marginRight: 2 }}
                  source={item.img_url}
                />
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
  matchTypeText: {
    marginTop: 30,
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
