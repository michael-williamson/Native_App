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

export default class Signup extends Component {
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
       return (<Button>
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
          .createUserAndRetrieveDataWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
  }

  onLoginFail() {
    this.setState({error: 'Authentication Failed', loading: false});
  }

  onLoginSuccess() {
    this.setState({email: '', password: '', loading: false, error: ''});

    this
      .props
      .history
      .push('/welcome');
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size={'small'}/>
    } else {
      return (
        <Button
        title="Sign Up"
        style={styles.button}
        onPress={this.onButtonPress.bind(this)}>
      </Button>
      );
    }
  }

  render() {
    return (
        <View
          style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center'
        }}>
          <BGImageComp/>
          <Text style={styles.HeaderText}>New Text</Text>
          <Input
            label="email"
            value={this.state.username}
            onChangeText={email => this.setState({email})}></Input>
          <Input
            secureTextEntry={true}
            label="password"
            value={this.state.password}
            onChangeText={password => this.setState({password})}></Input>
          <Text>{this.state.error}</Text>
          {this.renderButton()}
        </View>
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
    marginRight: 'auto'
  },
  buttonText: {
    color: 'white'
  }
});