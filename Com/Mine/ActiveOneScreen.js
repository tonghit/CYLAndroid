/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet,Text,Dimensions,View,Image,TouchableOpacity,ScrollView,WebView} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
let scale = Dimensions.get('window').scale ;

import LogoTitle from "../logoTitle"
//import pct from "../pct"
export default class ActiveOneScreen extends Component<Props> {


  render() {
        return (
                <ScrollView>
                              <View style={styles.schoolBackground}>
                          <View style={{height:height/30,width,marginLeft:30,}}>
                                            <Text style={styles.three}>xiōnɡ   dì   shū   zhí         xū   duō   fēn   rùn   ɡuǎ
                                            </Text>
                                           </View>

                              </View>
                       </ScrollView>
        );
  }
}

const styles = StyleSheet.create({
    schoolBackground:{
        backgroundColor:'#rgba(255, 204, 51, 1)',
    },

});
