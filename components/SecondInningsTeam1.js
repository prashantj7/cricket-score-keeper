import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { Dimensions } from 'react-native';

//const { width, height } = Dimensions.get('window');
export default class SecondInningsTeam1 extends Component {
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
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: '#666666',
                marginTop: 10,
                marginLeft: 20,
                fontSize: 12,
              }}>
              TEAM 1
            </Text>

          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
              justifyContent: 'flex-end',
              marginRight: 12,
            }}>

            <Text
              style={{
                color: '#666666',
                marginLeft: 80,
                marginTop: 10,
                paddingBottom: 10,
                fontWeight: 'bold',
              }}>
              {this.props.displayTeam2Score}
            </Text>
          </View>
        </View>
      )
    );
  }
}
