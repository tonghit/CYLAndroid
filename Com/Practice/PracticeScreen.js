/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet,Text,Image,Dimensions,View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');


export default class PracticeScreen extends Component<Props> {
static navigationOptions = {
       header:null,  //隐藏顶部导航栏
  };
  render() {
        return (
                <View style={styles.PracticeBackground}>
                    <View style={{width:250,height:40,backgroundColor:'#fff',marginLeft:60,marginTop:10,borderRadius:10,}}>
                       <Text style={{width:100,height:38,color:'#ff6600',marginLeft:80,paddingTop:6,fontSize:20,}}>检测一下
                       </Text>
                    </View>
                    <View style={{width:320,height:465,backgroundColor:'#ff6600',marginLeft:20,marginTop:-5,borderTopStartRadius:15,borderTopRightRadius:15,borderTopLeftRadius:15,}}>
                    <View style={{width:300,height:456,backgroundColor:'#fff',marginLeft:10,marginTop:10,borderTopStartRadius:15,borderTopRightRadius:15,borderTopLeftRadius:15,}}>
                        <Image source={{uri:'asset:/lu.png'}} style={{marginLeft:18,marginTop:40,height:390,width:300,}}/>
                    <View style={{width:70,height:65,marginTop:-430,marginLeft:40,}}>
                         <Image source={{uri:'asset:/jb.png'}} style={{height:height/10,width:width/10,marginLeft:5,}}/>
                     </View>
                     <View style={{width:100,height:40,marginTop:-30,marginLeft:110,backgroundColor:'#fae08f',borderRadius:5,flexDirection: 'row',}}>
                        <Image source={{uri:'asset:/nv.png'}} style={{height:height/16,width:width/16,marginTop:2,}}/>
                        <Text style={{fontSize:15,marginTop:10,marginLeft:3,}} onPress={() =>this.props.navigation.navigate('PracticeFive')}>第五部分</Text>
                     </View>
                     <View style={{width:100,height:40,marginTop:40,marginLeft:190,backgroundColor:'#fae08f',borderRadius:5,flexDirection: 'row',}}>
                            <Image source={{uri:'asset:/nv.png'}} style={{height:height/16,width:width/16,marginTop:2,}}/>
                        <Text style={{fontSize:15,marginTop:10,marginLeft:3,}} onPress={() =>this.props.navigation.navigate('PracticeFour')}>第四部分</Text>
                     </View>
                     <View style={{width:100,height:40,marginTop:60,marginLeft:50,backgroundColor:'#fae08f',borderRadius:5,flexDirection: 'row',}}>
                         <Image source={{uri:'asset:/nv.png'}} style={{height:height/16,width:width/16,marginTop:2,}}/>
                         <Text style={{fontSize:15,marginTop:10,marginLeft:3,}} onPress={() =>this.props.navigation.navigate('PracticeThree')}>第三部分</Text>
                     </View>
                     <View style={{width:100,height:40,marginTop:40,marginLeft:150,backgroundColor:'#fae08f',borderRadius:5,flexDirection: 'row',}}>
                        <Image source={{uri:'asset:/nv.png'}} style={{height:height/16,width:width/16,marginTop:2,}}/>
                        <Text style={{fontSize:15,marginTop:10,marginLeft:3,}} onPress={() =>this.props.navigation.navigate('PracticeTwo')}>第二部分</Text>
                     </View>
                     <View style={{width:100,height:40,marginTop:50,marginLeft:170,backgroundColor:'#fae08f',borderRadius:5,flexDirection: 'row',}}>
                            <Image source={{uri:'asset:/nv.png'}} style={{height:height/16,width:width/16,marginTop:2,}}/>
                            <Text style={{fontSize:15,marginTop:10,marginLeft:3,}} onPress={() =>this.props.navigation.navigate('PracticeOne')}>第一部分</Text>
                     </View>
                     <View style={{width:80,height:80,marginTop:-60,marginLeft:50,}}>
                            <Image source={{uri:'asset:/rn.png'}} style={{height:height/8,width:width/8,}}/>
                     </View>
                          </View>
                       </View>
                   </View>
           );
     }
   }

   const styles = StyleSheet.create({
                      PracticeBackground:{
                          height,
                          width,
                          backgroundColor:'#rgba(255, 204, 51, 1)',
                      },
                      pic1:{

                      },
   });
