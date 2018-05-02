import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { Dimensions } from 'react-native';

//const { width, height } = Dimensions.get('window');
export default class ThisOver extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      (
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: '#666666',
                marginTop: 20,
                marginLeft: 20,
                fontSize: 16,
                fontWeight: '900'
              }}>
              THIS OVER
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text
              style={{
                color: '#666666',
                marginTop: 20,
                fontWeight: 'bold',
              }}>
              {this.props.displayThisOverRuns}
              {' '}
              runs (
              {this.props.displayThisOverBallLeft}
              {' '}
              balls left)
              {' '}
            </Text>
          </View>
        </View>
      )
    );
  }
}
