import React, {Component} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import BGImage from '../../images/landing-img.jpg';

export default class BGImageComp extends Component {
    render() {
        return (

            <Image
                source={require("../../images/landing-img.jpg")}
                style={styles.imageStyle}>
                {this.props.chidren}
            </Image>

        )
    }

};

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        position: 'absolute',
        width: '100%',
        height: '100%',
        justifyContent: 'center'

    }
})
