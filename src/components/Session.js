import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import {OT_SESSION_ID, OT_TOKEN, OT_API_KEY} from '../../config/keys';
import OpenTok,{Publisher} from 'react-native-opentok';

import { Ref } from 'react';

import Spinner from './Spinner';
import BGImageComp from './BGImageComp';


class Session extends Component {

  state = {
    loading: true,
    error: ''
  }

  // using async here just to get example working
  async componentWillMount() {
    try{
    await OpenTok.connect(OT_SESSION_ID, OT_TOKEN);
    OpenTok.on(OpenTok.events.ON_SIGNAL_RECEIVED, e => this.setState({error:e}));}
    catch(e){
      this.setState({error:e});
    }

  }


  renderContent(){
    if(this.state.loading){
      return <Spinner size={"large"}/> 
    }else{
    return (
      <View
        style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
        <Publisher
          style={{
          height: 100,
          width: 200
        }}
          sessionId={OT_SESSION_ID}
          cameraDirection={'front'}
          onPublishStart={()=> console.log('started')}/>
        {this.printText.bind(this)}
      </View>
    )}
  }


  render() {
    return(
      <View         style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
      <BGImageComp/> 
      <Text>{this.state.error}</Text>
        {this.renderContent()}
      </View> 
    );
  }
};

const styles = StyleSheet.create({
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

export default Session;