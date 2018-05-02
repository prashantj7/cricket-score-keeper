import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './screens/Home';
import SingleMatchInn1Screen from './screens/SingleMatch_Inn1';
import SingleMatchInn2Screen from './screens/SingleMatch_Inn2';

const Home = () => <HomeScreen />;
const SingleMatchInn1 = () => <SingleMatchInn1Screen />;
const SingleMatchInn2 = () => <SingleMatchInn2Screen />;

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar initial>
          <Scene key="match_list" component={Home} />
          <Scene key="single_match" component={SingleMatchInn1} />
          <Scene key="single_match_inn2" component={SingleMatchInn2} />
        </Scene>
      </Router>
    );
  }
}
