import React, { Component } from 'react';
import Home from "./src/components/Home";
import Chat from "./src/components/Chat";

import {
  Router,
  Scene,
} from "react-native-router-flux";

import {
  Platform,
} from "react-native";



export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 2 : 3}}>
          <Scene key='home' component={Home} title='Home' />
          <Scene key='chat' component={Chat} title='Chat' />
        </Scene>
      </Router>
    );
  }
}