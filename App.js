import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';

import Landing from './src/components/Landing';
import Welcome from './src/components/Welcome';

class App extends Component {

  render() {
    return (
      <NativeRouter>
        <View
          style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: 'gray'
        }}>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/welcome" component={Welcome}/>
        </View>
      </NativeRouter>

    );
  }
}


const styles = StyleSheet.create({});

export default App; 