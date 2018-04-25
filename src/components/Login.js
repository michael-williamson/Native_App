import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Animated,
  Button
} from 'react-native';
import firebase from 'firebase';

import BGImageComp from './BGImageComp';
import FadeInView from './FadeInView';
import Input from './Input';
import Spinner from './Spinner';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: '',
      loading: false
    }

  }

  renderContent(){
    switch(this.props.loggedIn){
      case true: 
      return(
        <Button>
          Log Out
        </Button> 
      );
      case false:
       return( <Button>
          Log In
        </Button>);
      default: 
      return <Spinner size={'large'}/>
    }
  }

  onButtonPress() {
    const {email, password} = this.state;


    this.setState({error: '', loading: true});

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch();
  }

  onLoginSuccess() {
    this.setState({email: '', password: '', loading: false, error: ''});

    this
      .props
      .history
      .push('/welcome');
  }

  onLoginFail() {
    this.setState({error: 'Authentication Failed', loading: false});
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'}/>
    } else {
      return (
        <View>
            <Input
            label="email"
            value={this.state.username}
            onChangeText={email => this.setState({email})}></Input>
          <Input
            secureTextEntry={true}
            label="password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}></Input>
            <Button
              style={styles.button}
              onPress={this
              .onButtonPress
              .bind(this)}
              title="login"
              >
            </Button>
        </View> 
      );
    }
  }
   
  render() {
    return (
      <FadeInView
        style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <View
          style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <BGImageComp/>
          <Text style={styles.HeaderText}>New Text</Text>

          <Text>{this.state.error}</Text>
          {this.renderButton()}
          <Button
            title="Sign Up"
            style={styles.button}
            onPress={() => this.props.history.push("/signup")}>
          </Button>
        </View>
      </FadeInView>
    );
  }
}

const styles = StyleSheet.create({
  HeaderText: {
    color: 'black',
    fontSize: 40,
    textAlign: 'center',
    height: 50,
    width: '100%'
  },
  button: {
    backgroundColor: 'blue',
    width: "80%",
    padding: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white'
  },

});