/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet,Text,Dimensions,View,Image,TouchableOpacity,FlatList} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
//import pct from "../pct"
export default class RidoScreen extends Component<Props> {

    static navigationOptions = {
        title: '看读',
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
            return(
            <View style={styles.schoolBackground}>

                            <View style={styles.band} >
                                  <View style={styles.one}>
                                      <Image source={{uri:'asset:/woman.png'}} style={styles.textOne}/>
                                      <Text style={styles.textTwo} onPress={()=>this.props.navigation.navigate("RR")}>第一部分</Text>
                                      <Image source={{uri:'asset:/v2.png'}} style={styles.textThree}/>
                                  </View>
                            </View>
                            <View style={styles.band} >
                                  <View style={styles.one}>
                                      <Image source={{uri:'asset:/woman.png'}} style={styles.textOne}/>
                                      <Text style={styles.textTwo} onPress={()=>this.props.navigation.navigate("RRTwo")}>第二部分</Text>
                                      <Image source={{uri:'asset:/v2.png'}} style={styles.textThree}/>
                                  </View>
                            </View>
                            <View style={styles.band} >
                                  <View style={styles.one}>
                                      <Image source={{uri:'asset:/woman.png'}} style={styles.textOne}/>
                                      <Text style={styles.textTwo} onPress={()=>this.props.navigation.navigate("RRThree")}>第三部分</Text>
                                      <Image source={{uri:'asset:/v2.png'}} style={styles.textThree}/>
                                  </View>
                            </View>
                            <View style={styles.band} >
                                  <View style={styles.one}>
                                      <Image source={{uri:'asset:/woman.png'}} style={styles.textOne}/>
                                      <Text style={styles.textTwo} onPress={()=>this.props.navigation.navigate("RRFour")}>第四部分</Text>
                                      <Image source={{uri:'asset:/v2.png'}} style={styles.textThree}/>
                                  </View>
                            </View>
                            <View style={styles.band} >
                                  <View style={styles.one}>
                                      <Image source={{uri:'asset:/woman.png'}} style={styles.textOne}/>
                                      <Text style={styles.textTwo} onPress={()=>this.props.navigation.navigate("RRFive")}>第五部分</Text>
                                      <Image source={{uri:'asset:/v2.png'}} style={styles.textThree}/>
                                  </View>
                            </View>

            </View>
              );

    }

}

const styles = StyleSheet.create({
    schoolBackground:{
        width,
        height,
        backgroundColor: "#rgba(255, 204, 51, 1)"
    },
    band:{
        width:width-width/5,
        height:height/9,
        marginTop:20,
        marginLeft:width/10,
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:1,
        borderRadius:10,
    },
    one:{flexDirection: 'row',},
    textOne:{width:width/5,height:60,marginLeft:10,marginTop:5,resizeMode:'contain',},
    textThree:{width:width/5,height:60,marginLeft:10,marginTop:5,resizeMode:'contain',},
    textTwo:{marginLeft:28,textAlign:'center',marginTop:20,fontSize:20,color:'#000'},

});
