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

import Landing from './src/components/Landing';
import Welcome from './src/components/Welcome';
import Spinner from './src/components/Spinner';

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
          <Route exact path="/" loggedIn={this.state.loggedIn} component={Landing}/>
          <Route exact path="/welcome" component={Welcome}/>
        </View>
      </NativeRouter>

    );
  }
}


const styles = StyleSheet.create({});

export default App; 