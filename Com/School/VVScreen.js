/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet,Text,Dimensions,View,Image,TouchableOpacity,WebView} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
let scale = Dimensions.get('window').scale ;

import LogoTitle from "../logoTitle"
//import pct from "../pct"
export default class VVScreen extends Component<Props> {


  render() {
        return (
                <WebView
                        originWhitelist={['*']}
                        source={{uri:this.props.navigation.getParam('cImgURL')}}
//                       source={{uri:('https://v.qq.com/x/cover/mvjfcdfi7o83fbj/q0022q0jnkp.html?')}}
                      />
        );
  }
}

const styles = StyleSheet.create({
    schoolBackground:{
        height,
        backgroundColor:'#rgba(255, 204, 51, 1)',
    },

});
