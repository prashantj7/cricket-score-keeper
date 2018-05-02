import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class UndoRedoButtons extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      // Try setting `flexDirection` to `row`.
      (
        <View
          style={{
            flexDirection: 'row',
            height: 40,
            paddingTop: 5,
            backgroundColor: '#dddddd',
          }}>
          <View
            style={{
              flex: 1,
              height: 40,
              alignItems: 'flex-end',
              marginBottom: 10,
            }}>
            <Image
              style={{ width: 40, height: 40, marginRight: 2 }}
              source={require('./../assets/undo.png')}
            />

          </View>
          <View
            style={{
              flex: 1,
              height: 40,
              marginBottom: 10,
            }}>

            <Image
              style={{ width: 40, height: 40, marginLeft: 2 }}
              source={require('./../assets/redo.png')}
            />
          </View>
        </View>
      )
    );
  }
}
