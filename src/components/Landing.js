import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  Animated,
  TextInput,
  Button
} from 'react-native';
import {Link} from 'react-router-native';

import BGImageComp from './BGImageComp';
import FadeInView from './FadeInView';

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }

  }

  usernameChange(text) {
    this.setState({username: text});
  }

  passwordChange(text) {
    this.setState({password: text});
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
          <TextInput
            style={styles.inputStyles}
            placeholder="username"
            value={this.state.username}
            onChange={this
            .usernameChange
            .bind(this)}></TextInput>
          <TextInput
            style={styles.inputStyles}
            placeholder="password"
            value={this.state.password}
            onChange={this
            .passwordChange
            .bind(this)}></TextInput>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableHighlight>
          <Button
            title="Skip"
            style={styles.button}
            onPress={() => this.props.history.push("/welcome")}>
            <Text style={styles.buttonText}>Skip</Text>
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
  inputStyles: {
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    color: 'black',
    marginTop: 10
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