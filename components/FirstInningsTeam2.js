import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { Dimensions } from 'react-native';

//const { width, height } = Dimensions.get('window');
export default class FirstInningsTeam2 extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      (
        <View
          style={{
            flexDirection: 'row',
            borderBottomWidth: 2,
            borderColor: '#d6d7da',
          }}>
          <View style={{ flex: 1, height: 40 }}>
            <Text
              style={{
                color: '#666666',
                marginTop: 12,
                marginLeft: 20,
                fontSize: 12,
              }}>
              TEAM 2
            </Text>

          </View>
          <View style={{ flex: 1, height: 40 }}>

            <Text
              style={{
                color: '#666666',
                marginLeft: 80,
                marginTop: 10,
                paddingBottom: 10,              }}>
              Yet to bat
            </Text>
          </View>
        </View>
      )
    );
  }
}
