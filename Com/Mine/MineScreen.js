/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform,StyleSheet,Text,Image,Dimensions,View} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');


export default class MineScreen extends Component<Props> {

static navigationOptions = {
       header:null,  //隐藏顶部导航栏
  };
  render() {
        return (
                 <View style={styles.MineBackground}>
                                    <View style={styles.scTop}>
                                    <Image source={{uri:'asset:/personmine.png'}} style={styles.topImg}/>
                                    </View>

                                    <View style={{width:100,height:35,marginLeft:81,flexDirection: 'row'}}>
                                    <Text style={styles.botton} onPress={()=>this.props.navigation.navigate("Loinone")}>登录</Text>
                                    <Text style={styles.botton} onPress={()=>this.props.navigation.navigate("Regone")}>注册</Text>
                                    </View>
                                    <View style={{marginTop:10,width,height:50,backgroundColor:'#fff',flexDirection: 'row',}}>
                                    <Image source={{uri:'asset:/active.png'}} style={{ marginLeft:5,marginTop:9.5,height:40,width:40,}}/>
                                    <Text style={{width,height:40,marginLeft:2,paddingTop:15,backgroundColor:'#fff',fontSize:16,}} onPress={()=>this.props.navigation.navigate("Actone")}>动态
                                    </Text>
                                    </View>
                                    <View style={{marginTop:15,width,height:50,backgroundColor:'#fff',flexDirection: 'row',}}>
                                    <Image source={{uri:'asset:/chatbook.png'}} style={{marginLeft:11,marginTop:9.5,height:30,width:30,}}/>
                                    <Text style={{width,height:40,backgroundColor:'#fff',marginLeft:5,paddingTop:15,fontSize:16,}} onPress={()=>this.props.navigation.navigate("Chatbone")}>通讯录
                                    </Text>
                                    </View>
                                    <View style={{marginTop:1,width,height:50,backgroundColor:'#fff',flexDirection: 'row',}}>
                                    <Image source={{uri:'asset:/addfriend.png'}} style={{marginLeft:8,marginTop:14,height:30,width:30,}}/>
                                    <Text style={{width,height:40,backgroundColor:'#fff',marginLeft:7,paddingTop:15,fontSize:16,}} onPress={()=>this.props.navigation.navigate("Addfone")}>添加好友
                                    </Text>
                                    </View>
                                    <View style={{marginTop:1,width,height:50,backgroundColor:'#fff',flexDirection: 'row',}}>
                                    <Image source={{uri:'asset:/gallary.png'}} style={{marginLeft:10,marginTop:10,height:30,width:30,}}/>
                                    <Text style={{width,height:40,backgroundColor:'#fff',marginLeft:6,paddingTop:15,fontSize:16,}} onPress={()=>this.props.navigation.navigate("Gallaone")}>相册
                                    </Text>
                                    </View>
                                    <View style={{marginTop:1,width,height:50,backgroundColor:'#fff',flexDirection: 'row',}}>
                                    <Image source={{uri:'asset:/recieve.png'}} style={{marginLeft:10,marginTop:10,height:30,width:30,}}/>
                                    <Text style={{width,height:40,backgroundColor:'#fff',marginLeft:6,paddingTop:15,fontSize:16,}} onPress={()=>this.props.navigation.navigate("Recone")}>收藏夹
                                    </Text>
                                    </View>
                                    <View style={{marginTop:15,width,height:50,backgroundColor:'#fff',flexDirection: 'row',}}>
                                    <Image source={{uri:'asset:/set.png'}} style={{marginLeft:10,marginTop:8,height:30,width:30,}}/>
                                    <Text style={{width,height:40,backgroundColor:'#fff',marginLeft:6,paddingTop:15,fontSize:16,}} onPress={()=>this.props.navigation.navigate("Setone")}>设置
                                    </Text>
                                    </View>
                                </View>
        );
  }
}
const styles = StyleSheet.create({
                   MineBackground:{
                       height,
                       width,
                       backgroundColor:'#rgba(255, 204, 51, 1)',
                   },
                   topImg:{
                       height:height/5,
                       width:height/5,
                       marginLeft:117,
                       marginTop:3,
                   },
                  botton:{
                       backgroundColor:'#fff',
                       height:height/20,
                       width:width/5,
                       marginLeft:18,
                       marginRight:0,
                       paddingTop:3.5,
                       fontSize:16,
                       borderRadius:5,
                  },
              });
