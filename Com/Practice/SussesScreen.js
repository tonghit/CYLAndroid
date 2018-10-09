/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet,Text,Dimensions,View,Image,TouchableOpacity,FlatList,WebView,ScrollView,Button,Alert, AppRegistry} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
let scale = Dimensions.get('window').scale ;
//import pct from "../pct"
export default class SussesScreen extends Component<Props> {

    static navigationOptions = {
        title: '提交',
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
                <View style={{width:width/2,height:height/13,borderWidth:1,borderColor:'#000',backgroundColor:'#fff',marginLeft:width/4,marginTop:height/4}}>
                    <Text style={{color:'#000',paddingLeft:10,paddingTop:10,fontSize:30}}>提交成功!!</Text>
                </View>
                <View style={{width:width/2,height:height/13,borderWidth:1,borderColor:'#000',backgroundColor:'#fff',marginLeft:width/4,marginTop:height/4}}>
                    <Text style={{color:'#000',paddingLeft:60,paddingTop:10,fontSize:30}} onPress={() => this.props.navigation.navigate('Practice')}>返回</Text>
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

});
