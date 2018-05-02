import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ToWin extends Component {
  render() {
    return (
      <View style={{ alignItems: 'center',borderBottomWidth:1,borderColor:"#dddddd" }}>
        <Text style={{ marginTop: 5, marginBottom: 10, fontSize: 13, fontWeight: '900', color: '#666666'
        }}>
          TO WIN {this.props.displayToWinScore} in {this.props.displayToWinInThisMuchBalls} balls
        </Text>
      </View>
    );
  }
}
