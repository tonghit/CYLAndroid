/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet,Text,Dimensions,View,Image,TouchableOpacity,FlatList,WebView,ScrollView} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
let scale = Dimensions.get('window').scale ;
//import pct from "../pct"
export default class CateScreen extends Component<Props> {

    static navigationOptions = {
        title: '打卡',
        headerStyle: {
          backgroundColor: '#fff',

        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf:'center'
        },
      };


  render() {

      return (
        <ScrollView>
            <View style={styles.schoolBackground}>
                <View style={styles.pos}>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                    <View style={styles.yuan}></View>
                </View>
            </View>
        </ScrollView>
              );

    }

}

const styles = StyleSheet.create({
    schoolBackground:{
        height,
        width,
        backgroundColor:'#rgba(255, 204, 51, 1)',
    },
    pos:{
        width:width-40,
        height,
        marginTop:20,
        marginLeft:20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: "wrap",
    },
    yuan:{
         width:width/6.5,
         height:height/10-10,
         marginTop:10,
         marginLeft:10,
         borderRadius:50,
         borderRightWidth: 1 * 2 / scale ,
         borderWidth:1,
         borderColor:'#000',
         backgroundColor:'#fff'

    },

});
