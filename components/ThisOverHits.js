import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { Dimensions } from 'react-native';

//const { width, height } = Dimensions.get('window');
export default class ThisOverHits extends Component {
  render() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 20 }}>
        <View ><Text style={{color:'#555555', fontSize: 25 }}>{this.props.displayThisOverHitsShowcase}</Text></View>
      </View>
    );
  }
}
