import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import {NativeRouter, Route, Link} from 'react-router-native';
import firebase from 'firebase';  
import Keys from './config/keys'

import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Welcome from './src/components/Welcome';
import Spinner from './src/components/Spinner';
import Session from './src/components/Session';

class App extends Component {
  state = {loggedIn: null}

  componentWillMount(){
    firebase.initializeApp(
      {
          apiKey: Keys.apiKey,
          authDomain: Keys.authDomain,
          databaseURL: Keys.databaseURL,
          projectId: Keys.projectId,
          storageBucket: Keys.storageBucket,
          messagingSenderId: Keys.messagingSenderId
        }
    );
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        this.setState({
          loggedIn: true
        });
      }else{
        this.setState({
          loggedIn: false
        });
      }
    }); 
  }




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
          <Route exact path="/" loggedIn={this.state.loggedIn} component={Login}/>
          <Route exact path="/signup" loggedIn={this.state.loggedIn} component={Signup}/>
          <Route exact path="/welcome" component={Welcome}/>
          <Route exact path="/session" component={Session}/>
        </View>
      </NativeRouter>

    );
  }
}


const styles = StyleSheet.create({});

export default App; 