import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import UndoRedo from './../containers/UndoRedo.container';

const ControlPanel = (props) => {

    const addToScore = (runs) => ( props.addRuns(runs) );
    const handleWicketPress = () => ( props.addWicket() );
    const handleNoBallPress = () => ( props.addNoBall() );
    const handleWideBallPress = () => ( props.addWideBall() );

    return (
      <View style={{ flexGrow: 1, flexShrink: 1, backgroundColor: '#ddd' }}>
        <UndoRedo />
        <View style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <View style={{ flex: 1 }}>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => addToScore(0)}
                style={[styles.roundButton, {
                  borderWidth: 1,
                  marginLeft: 30,
                  marginTop: 20,
                }]}>
                <Text style={styles.roundButtonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addToScore(1)}
                style={[styles.roundButton, {
                  borderWidth: 2,
                  marginLeft: 20,
                  marginTop: 20,
                }]}>
                <Text style={styles.roundButtonText}>1</Text>
              </TouchableOpacity>
            </View>

            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => addToScore(2)}
                style={[styles.roundButton, {
                  borderWidth: 3,
                  marginLeft: 30,
                  marginTop: 20,
                }]}>
                <Text style={styles.roundButtonText}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addToScore(3)}
                style={[styles.roundButton, {
                  borderWidth: 4,
                  marginLeft: 20,
                  marginTop: 20,
                }]}>
                <Text style={styles.roundButtonText}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row' }}>
              <TouchableOpacity
                onPress={() => addToScore(4)}
                style={[styles.roundButton, {
                  borderWidth: 4.5,
                  marginLeft: 30,
                  marginTop: 20,
                }]}>
                <Text style={styles.roundButtonText}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => addToScore(6)}
                style={[styles.roundButton, {
                  borderWidth: 6,
                  marginLeft: 20,
                  marginTop: 20,
                }]}>
                <Text style={styles.roundButtonText}>6</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View style={{ display: 'flex', flexDirection: 'column' }}>
              <TouchableOpacity
                onPress={ () => handleWideBallPress() }
                style={[styles.rectButton, {
                  borderWidth: 1.5,
                  marginLeft: 30,
                  marginTop: 20,
                }]}
                value={props.children}>
                <Text style={{ fontSize: 14, color: '#777777' }}>
                  WIDE BALL
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={ () => handleNoBallPress() }
                style={[styles.rectButton, {
                  borderWidth: 1.5,
                  marginLeft: 30,
                  marginTop: 10,
                }]}
                value={props.children}>
                <Text style={{ fontSize: 14, color: '#777777' }}>
                  NO BALL
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={ () => handleWicketPress() }
                style={[styles.rectButton, {
                  borderWidth: 3,
                  marginLeft: 30,
                  marginTop: 55
                }]}
                value={props.children}>
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

const styles = StyleSheet.create({
  roundButton: {
    width: 50,
    height: 50,
    borderColor: '#777777',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rectButton: {
    width: 120,
    height: 40,
    borderColor: '#777777',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roundButtonText: {
    fontSize: 25,
    color: '#777777',
  }
});

export default ControlPanel;