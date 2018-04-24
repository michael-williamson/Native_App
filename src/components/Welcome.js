import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

import BGImageComp from './BGImageComp';

class Welcome extends Component {
  render() {
    return (
      <View
        style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <BGImageComp/>
          <Text style={styles.HeaderText}>WELCOME PAGE</Text>
          <Button title="Back to login" onPress={() => this.props.history.push('/')}></Button>
      </View>
    )
  }
};

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
  }
});

export default Welcome;