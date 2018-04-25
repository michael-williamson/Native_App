import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
  } from 'react-native';

 const Input =({label,value,onChangeText,secureTextEntry})=> {

    return (
        <View style={styles.containerStyle}>
            <Text style={styles.labelStyle}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                autoCorrect={false}
                value={value}
                onChangeText={onChangeText}
                style={styles.inputStyles}
            /> 
        </View> 

    );

};

const styles = StyleSheet.create({
inputStyles: {
    color: '#000',
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2,

  },
  labelStyle:{
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
  },
  containerStyle:{
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
  }
});

export default Input; 
