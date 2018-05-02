import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import UndoRedoButtons from './../components/UndoRedoButtons';

export default class ControlPanel extends Component {
  render() {
    return (
      <View style={{ flexGrow: 1, flexShrink: 1, backgroundColor: '#ddd' }}>
        <UndoRedoButtons />
        <View style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <View style={{ flex: 1 }}>
            <View style={{ display: 'inline-flex', flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => this.incrementScoreByZero(0)}
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#777777',
                  borderRadius: 50,
                  marginLeft: 30,
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ fontSize: 25, color: '#777777' }}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.incrementScoreByOne(1)}
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 2,
                  borderColor: '#777777',
                  borderRadius: 50,
                  marginLeft: 20,
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ fontSize: 25, color: '#777777' }}>1</Text>
              </TouchableOpacity>
            </View>

            <View style={{ display: 'inline-flex', flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => this.incrementScoreByTwo(2)}
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 3,
                  borderColor: '#777777',
                  borderRadius: 50,
                  marginLeft: 30,
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ fontSize: 25, color: '#777777' }}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.incrementScoreByThree(3)}
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 4,
                  borderColor: '#777777',
                  borderRadius: 50,
                  marginLeft: 20,
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ fontSize: 25, color: '#777777' }}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={{ display: 'inline-flex', flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => this.incrementScoreByFour(4)}
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 4.5,
                  borderColor: '#777777',
                  borderRadius: 50,
                  marginLeft: 30,
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ fontSize: 25, color: '#777777' }}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.incrementScoreBySix(6)}
                style={{
                  width: 50,
                  height: 50,
                  borderWidth: 6,
                  borderColor: '#777777',
                  borderRadius: 50,
                  marginLeft: 20,
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{ fontSize: 25, color: '#777777' }}>6</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: '' }}>
            <View style={{ display: 'inline-flex', flexDirection: 'column' }}>
              <TouchableOpacity
                onPress={() => this.incrementWideBalls('wi')}
                style={{
                  width: 120,
                  height: 40,
                  borderWidth: 1.5,
                  borderColor: '#777777',
                  borderRadius: 5,
                  marginLeft: 30,
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                value={this.props.children}>
                <Text style={{ fontSize: 14, color: '#777777' }}>
                  WIDE BALL
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.incrementNoBalls('no')}
                style={{
                  width: 120,
                  height: 40,
                  borderWidth: 1.5,
                  borderColor: '#777777',
                  borderRadius: 5,
                  marginLeft: 30,
                  marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                value={this.props.children}>
                <Text style={{ fontSize: 14, color: '#777777' }}>
                  NO BALL
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => this.incrementWickets('W')}
                style={{
                  width: 120,
                  height: 40,
                  borderWidth: 3,
                  borderColor: '#777777',
                  borderRadius: 5,
                  marginLeft: 30,
                  marginTop: 55,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                value={this.props.children}>
                <Text style={{ fontSize: 14, color: '#777777' }}>
                  WICKET
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
