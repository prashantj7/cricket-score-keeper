import React, { Component } from 'react';
import { View, StyleSheet,TouchableOpacity ,Text} from 'react-native';
import { Constants } from 'expo';

import MenuButton from './../components/MenuButton';
import SecondInnings from './../components/SecondInnings';
import SecondInningsTeam1 from './../components/SecondInningsTeam1';
import ThisOver from './../components/ThisOver';
import ThisOverHits from './../components/ThisOverHits';
import UndoRedoButtons from './../components/UndoRedoButtons';
import ToWin from './../components/ToWin';
//import ControlPanel from './../components/ControlPanel';

export default class SingleMatch_Inn2 extends Component {
    constructor(props) {
    super(props);
    this.state = {
      score: 0,
      wickets: 0,
      noBalls: 0,
      wideBalls: 0,
      numberOfBalls: 0,
      runRate: 0,
      overs: 0,
      totalOvers: 10,
      projectedScore: 0,
      thisOverRuns: [],
      runsOnCurrentBall: 0,
      ballLeftInThisOver: 6,
      temp: 0,
      thisOverBallLeft: 6,
      temp2: 0,
      thisOverBallsIncludingWideAndNobe: 0,
      currentOverHits: [],
      wideNoArray: [],
      thisOverRunsCalculatorTemp: 0,
      tempArr:[],
      thisOverRunsCalculatorArray: [],
      startingIndexOfThisOverHits:0,
      startingIndexReset:0,
      total:0,
      arrayIndex:0,
      i:0,
      j:0,
      currentOverTotalRuns:0,
      toWinScore: 150,
      toWinBallsRequired: 60,
    };
    this.incrementScoreByZero = this.incrementScoreByZero.bind(this);
    this.incrementScoreByOne = this.incrementScoreByOne.bind(this);
    this.incrementScoreByTwo = this.incrementScoreByTwo.bind(this);
    this.incrementScoreByThree = this.incrementScoreByThree.bind(this);
    this.incrementScoreByFour = this.incrementScoreByFour.bind(this);
    this.incrementScoreBySix = this.incrementScoreBySix.bind(this);
    this.incrementNoBalls = this.incrementNoBalls.bind(this);
    this.incrementWideBalls = this.incrementWideBalls.bind(this);
    this.incrementWickets = this.incrementWickets.bind(this);
    this.projectedScoreCalculator = this.projectedScoreCalculator.bind(this);
    this.runRateCalculator = this.runRateCalculator.bind(this);
    this.incrementBallsAndOverCount = this.incrementBallsAndOverCount.bind(
      this
    );
    this.thisOverRunsCalculator = this.thisOverRunsCalculator.bind(this);
    this.thisOverBallLeftCalculator = this.thisOverBallLeftCalculator.bind(
      this
    );
    this.thisOverHitsShowcase = this.thisOverHitsShowcase.bind(this);
    this.getSum = this.getSum.bind(this);
    this.arraySum=this.arraySum.bind(this);
    this.toWinScoreCalculator = this.toWinScoreCalculator.bind(this);
    //this.projectedscoreCalculator = this.projectedscoreCalculator.bind(this);
  }

  toWinScoreCalculator(buttonId) {
    this.setState({ toWinScore: this.state.toWinScore - buttonId });
    
    }

 thisOverHitsShowcase(buttonId) {
    
  this.state.startingIndexOfThisOverHits++;
  this.state.tempArr.push(buttonId);


  if((this.state.numberOfBalls+2)%6!=1)
  {
  this.setState({currentOverHits:this.state.tempArr.slice(this.state.startingIndexReset,this.state.tempArr.length
  )});

}

  else
  {
  this.setState({startingIndexReset:this.state.startingIndexOfThisOverHits,
  currentOverHits:this.state.tempArr.slice(this.state.startingIndexReset,this.state.tempArr.length  )
  });

  }
 
 }



  thisOverRunsCalculator(scoreCount) {

  this.state.thisOverRunsCalculatorArray.push(scoreCount);
  this.state.i++;
  
  if((this.state.numberOfBalls+2)%6!=1)
  {
   this.setState({thisOverRuns:this.state.thisOverRunsCalculatorArray.slice(this.state.j,this.state.thisOverRunsCalculatorArray.length

   )});
   this.arraySum(this.state.thisOverRunsCalculatorArray.slice(this.state.j,this.state.thisOverRunsCalculatorArray.length).reduce(this.getSum));
 }
 else
 {
  this.setState({j:this.state.i,
  thisOverRuns:this.state.thisOverRunsCalculatorArray.slice(this.state.j,this.state.thisOverRunsCalculatorArray.length  )
 });
 this.arraySum(this.state.thisOverRunsCalculatorArray.slice(this.state.j,this.state.thisOverRunsCalculatorArray.length

).reduce(this.getSum));
}

  }
 getSum(total, num) {
    return total + num;
 }
 
 arraySum(sum)
  {
  this.setState({total:sum});
  }

  projectedScoreCalculator() {
    let pR = this.state.runRate * this.state.totalOvers;
    pR = Number(pR).toFixed(0);
    this.setState({ projectedScore: pR });
  }

  runRateCalculator(incrementScoreBy) {
    let rr =
      (this.state.score + incrementScoreBy) /
      (this.state.overs + (this.state.numberOfBalls + 1) / 6);

    rr = Number(rr).toFixed(2);

    this.setState({ runRate: rr });
  }

  incrementBallsAndOverCount() {
    if (this.state.numberOfBalls != 5) {
      this.setState({
        numberOfBalls: this.state.numberOfBalls + 1,
      });
    } else {
      this.setState({
        numberOfBalls: 0,
        overs: this.state.overs + 1,
      });
    }
  }

  thisOverBallLeftCalculator() {
    this.state.temp2++;
    this.setState({ toWinBallsRequired: this.state.toWinBallsRequired - 1 });
    if (this.state.temp2 % 6 == 1) {
      this.setState({ thisOverBallLeft: 5 });
    } else {
      this.setState({ thisOverBallLeft: this.state.thisOverBallLeft - 1 });
    }
  }

  incrementScoreByZero(buttonId) {
    this.thisOverHitsShowcase(buttonId);
    this.thisOverBallLeftCalculator();
    this.incrementBallsAndOverCount(0);
    this.thisOverRunsCalculator(0);
    this.runRateCalculator(0);

    this.setState({
      thisOverBallsIncludingWideNobeAndWicket: this.state
        .thisOverBallsIncludingWideAndNobe + 1,
    });
  }

  incrementScoreByOne(buttonId) {
    this.thisOverHitsShowcase(buttonId);
    this.thisOverBallLeftCalculator();
    this.incrementBallsAndOverCount();
    this.thisOverRunsCalculator(1, buttonId);
    this.runRateCalculator(1);

    this.setState({
      score: this.state.score + 1,
      thisOverBallsIncludingWideNobeAndWicket: this.state
        .thisOverBallsIncludingWideAndNobe + 1,
    });

    this.projectedScoreCalculator();
    this.toWinScoreCalculator(buttonId);
  }

  incrementScoreByTwo(buttonId) {
    this.thisOverHitsShowcase(buttonId);
    this.thisOverBallLeftCalculator();
    this.incrementBallsAndOverCount();
    this.thisOverRunsCalculator(2, buttonId);

    this.runRateCalculator(2);

    this.setState({
      score: this.state.score + 2,
      thisOverBallsIncludingWideNobeAndWicket: this.state
        .thisOverBallsIncludingWideAndNobe + 1,
    });

    this.projectedScoreCalculator();
    this.toWinScoreCalculator(buttonId);
  }

  incrementScoreByThree(buttonId) {
    this.thisOverHitsShowcase(buttonId);
    this.thisOverBallLeftCalculator();
    this.incrementBallsAndOverCount();
    this.thisOverRunsCalculator(3, buttonId);
    this.runRateCalculator(3);

    this.setState({
      score: this.state.score + 3,
      thisOverBallsIncludingWideNobeAndWicket: this.state
        .thisOverBallsIncludingWideAndNobe + 1,
    });

    this.projectedScoreCalculator();

    this.toWinScoreCalculator(buttonId);
  }

  incrementScoreByFour(buttonId) {
    this.thisOverHitsShowcase(buttonId);
    this.thisOverBallLeftCalculator();
    this.incrementBallsAndOverCount();
    this.thisOverRunsCalculator(4, buttonId);
    this.runRateCalculator(4);

    this.setState({
      score: this.state.score + 4,
      thisOverBallsIncludingWideNobeAndWicket: this.state
        .thisOverBallsIncludingWideAndNobe + 1,
    });

    this.projectedScoreCalculator();

    this.toWinScoreCalculator(buttonId);
  }

  incrementScoreBySix(buttonId) {
    this.thisOverHitsShowcase(buttonId);
    this.thisOverBallLeftCalculator();
    this.incrementBallsAndOverCount();
    this.thisOverRunsCalculator(6, buttonId);
    this.runRateCalculator(6);

    this.setState({
      score: this.state.score + 6,
      thisOverBallsIncludingWideNobeAndWicket: this.state
        .thisOverBallsIncludingWideAndNobe + 1,
    });

    this.projectedScoreCalculator();
    this.toWinScoreCalculator(buttonId);
  }

  incrementNoBalls(buttonId) {
    this.thisOverHitsShowcase(buttonId);

    this.runRateCalculator(1);
    this.thisOverRunsCalculator(1, buttonId);
    this.setState({
      noBalls: this.state.noBalls + 1,
      score: this.state.score + 1,
      thisOverBallsIncludingWideNobeAndWicket: this.state
        .thisOverBallsIncludingWideAndNobe + 1,
    });

    this.projectedScoreCalculator();
    this.toWinScoreCalculator(1);
  }

  incrementWideBalls(buttonId) {
    this.thisOverHitsShowcase(buttonId);
    this.runRateCalculator(1);
    this.thisOverRunsCalculator(1, buttonId);
    this.setState({
      wideBalls: this.state.wideBalls + 1,
      score: this.state.score + 1,
      thisOverBallsIncludingWideNobeAndWicket: this.state
        .thisOverBallsIncludingWideAndNobe + 1,
    });

    this.projectedScoreCalculator();
    this.toWinScoreCalculator(1);
  }

  incrementWickets(buttonId) {
    this.thisOverHitsShowcase(buttonId);
    this.thisOverBallLeftCalculator();
    this.incrementBallsAndOverCount();
    this.setState({
      wickets: this.state.wickets + 1,
      thisOverBallsIncludingWideNobeAndWicket: this.state
        .thisOverBallsIncludingWideAndNobe + 1,
    });
    this.thisOverRunsCalculator(0,buttonId);
    this.projectedScoreCalculator();
  }
  render() {
    return (
      <View style={styles.page}>
        <View style={{ flexGrow: 1, flexBasis: '15%' }}>
        
          // temporary
          
            <MenuButton />
          
          <SecondInningsTeam1 displayTeam2Score={'95/4 (10)'} />
          <SecondInnings
            displayScore={this.state.score}
            displayWickets={this.state.wickets}
            displayWideBalls={this.state.wideBalls}
            displayNoBalls={this.state.noBalls}
            displayNumberOfBalls={this.state.numberOfBalls}
            displayrunRate={this.state.runRate}
            displayOvers={this.state.overs}
            displayTotalOvers={this.state.totalOvers}
            displayProjectedScore={this.state.projectedScore}
          />
          <ToWin
          displayToWinScore={this.state.toWinScore}
          displayToWinInThisMuchBalls={this.state.toWinBallsRequired}
        />
          <ThisOver
            displayThisOverRuns={this.state.total}
            displayThisOverBallLeft={this.state.thisOverBallLeft}
            displayThisOverHitsShowcase={this.state.currentOverHits}
          />
          <ThisOverHits
            displayThisOverHitsShowcase={this.state.currentOverHits.join("  ")}
          />
        </View>
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
                onPress={() => this.incrementWickets('(W)')}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'white',
    height: '100%',
  },
});
