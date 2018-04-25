import React, {Component} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import Keys from '../../config/keys';
import {OTPublisher,OTSession} from 'opentok-react-native';

import { Ref } from 'react';

import Spinner from './Spinner';
import BGImageComp from './BGImageComp';


class Session extends Component {

  state = {
    loading: true,
    error: ''
  }


  renderContent(){

    return (
      <View
        style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
      }}>
<OTSession apiKey={Keys.OT_API_KEY} sessionId={Keys.OT_SESSION_ID} token={Keys.OT_TOKEN}>
  <OTPublisher style={{ width: 100, height: 100 }} audioTrack={'false'} publishAudio={'false'}/>
</OTSession>
      </View>
    );
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