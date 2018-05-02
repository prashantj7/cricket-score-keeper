import React, { Component } from 'react';
import { View, Text } from 'react-native';

import ToWin from './../components/ToWin';

//const { width, height } = Dimensions.get('window');
export default class SecondInnings extends Component {
  render() {
    return (
      // Try setting `alignItems` to 'flex-start'
      // Try setting `justifyContent` to `flex-end`.
      (
        <View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
              borderColor: '#d6d7da',
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View>
                <Text
                  style={{
                    flex: 1,
                    color: '#666666',
                    marginTop: 10,
                    marginLeft: 20,
                    fontSize: 12,
                  }}>
                  TEAM 2 *
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'flex-end',
                  marginRight: 10,
                }}>
                <Text
                  style={{
                    color: '#666666',
                    fontSize: 58,
                    fontWeight: '900',
                  }}>
                  {this.props.displayScore}/{this.props.displayWickets}
                </Text>

                <Text
                  style={{
                    color: '#777777',
                    fontFamily: 'sans-serif',
                    fontSize: 25,
                    marginTop: 5,
                    marginBottom: 10,
                    fontWeight: 'bold',
                  }}>
                  (
                  {this.props.displayOvers}
                  .
                  {this.props.displayNumberOfBalls}
                  /
                  {this.props.displayTotalOvers}
                  )
                  {' '}
                </Text>
                <Text style={{ color: '#555555', marginTop: 10 }}>
                  Run Rate
                  {' '}{' '}
                  <Text style={{ color: '#555555', fontWeight: 'bold' }}>
                    {' '}{this.props.displayrunRate}
                  </Text>
                  {' '}{' '}
                </Text>
                <Text style={{ color: '#555555', marginTop: 2 }}>
                  Extras
                  {' '}
                  <Text style={{ color: '#555555', fontWeight: 'bold' }}>
                    {' '}NB {this.props.displayNoBalls}  {' '}
                  </Text>
                  <Text style={{ color: '#555555', fontWeight: 'bold' }}>
                    {' '}WD {this.props.displayWideBalls} {' '}
                  </Text>
                </Text>
                <Text
                  style={{ color: '#555555', marginTop: 2, marginBottom: 10 }}>
                  Projected Score
                  {' '}
                  <Text style={{ color: '#555555', fontWeight: 'bold' }}>
                    {' '} {this.props.displayProjectedScore}
                  </Text>
                  {' '}{' '}
                </Text>
              </View>
            </View>
            
          </View>

        </View>
      )
    );
  }
}
