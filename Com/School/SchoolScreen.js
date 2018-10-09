/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet,Text,Dimensions,View,Image,TouchableOpacity,ScrollView} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
let scale = Dimensions.get('window').scale ;

import LogoTitle from "../logoTitle"
//import pct from "../pct"
export default class MineScreen extends Component<Props> {
    static navigationOptions =({ navigation, navigationOptions }) =>{
        return {
            headerStyle: {backgroundColor: '#rgba(255, 204, 51, 1)',},
            headerTitle: (<LogoTitle title={navigation.getParam('title')}/>),
            headerRight: (
                // <Text><TouchableOpacity></TouchableOpacity><Icon name="md-person" size={23} color="white"/>&nbsp;&nbsp;&nbsp;&nbsp;</Text>
                <TouchableOpacity></TouchableOpacity>
            ),


        }
    }
  render() {
        return (
            <ScrollView>
                <View style={styles.schoolBackground}>
                    <View style={styles.scTop}>
                        <Image source={{uri:'asset:/timg.png'}} style={styles.topImg}/>
                    </View>

                    <View style={styles.scCenter}>
                        <View style={styles.look}>
                            <Text onPress={() => this.props.navigation.navigate('Look')}>
                                <Image source={{uri:'asset:/yone.png'}} style={{paddingTop:0,width:width/2.5,height:height/5,}}/>
                            </Text>
                        </View>
                        <View style={styles.look} >
                            <Text  onPress={() => this.props.navigation.navigate('Rido')}>
                                <Image source={{uri:'asset:/ytwo.png'}} style={{paddingTop:0,width:width/2.5,height:height/5}}/>
                            </Text>
                        </View>
                        <View style={styles.look}>
                            <Text onPress={() => this.props.navigation.navigate('Voide')}>
                                <Image source={{uri:'asset:/ythree.png'}} style={{paddingTop:0,width:width/2.5,height:height/5,}}/>
                            </Text>
                        </View>
                        <View style={styles.look}>
                            <Text onPress={() => this.props.navigation.navigate('Cate')}>
                                <Image source={{uri:'asset:/yfour.png'}} style={{paddingTop:0,width:width/2.5,height:height/5,}}/>
                            </Text>
                           </View>
                    </View>

                    <View style={styles.scButtom}>
                        <View  style={styles.xgText}>
                            <Text style={{fontSize:30,color:'#000',paddingLeft:10,paddingTop:5}}>相关读物</Text>
                        </View>
                        <View style={styles.xgImg}>
                            <View>
                                <View><Image source={{uri:'asset:/zl.jpg'}} style={styles.cenImg1}/></View>
                                <View style={styles.text}><Text> &lt;&lt; 朱子家训 朱子家礼	&gt;&gt;</Text></View>


                            </View>
                            <View>
                                <View><Image source={{uri:'asset:/tim1g.png'}} style={styles.cenImg1}/></View>
                                <View style={styles.text}><Text>&lt;&lt;朱子治家格言&gt;&gt;讲记蔡礼旭</Text></View>

                            </View>
                            <View>
                                <View><Image source={{uri:'asset:/z.jpg'}} style={styles.cenImg1}/></View>
                                <View style={styles.text}><Text> &lt;&lt;朱子治家格言研习报告：钟茂森教授讲述&gt;&gt; </Text></View>

                            </View>

                        </View>
                    </View>
                </View>
            </ScrollView>
        );
  }
}

const styles = StyleSheet.create({
    schoolBackground:{
        height,
        backgroundColor:'#rgba(255, 204, 51, 1)',
    },
    scTop:{
        width,
        height:height/3.2,
        backgroundColor:'#fff',
    },
    topImg:{
        width,
        height:height/3.2,
    },
    scCenter:{
        width,
        height:height/10,
        backgroundColor:'#fff',
        marginTop:10,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    look:{
         width:width/3.5,
         height:height/10-10,
         marginTop:0,
         flexDirection: 'column',
         justifyContent: 'center',
         paddingTop:8,
         paddingLeft:15,
         paddingRight:15,
     },
    ceText:{
        fontSize:10,
    },

    scButtom:{
        width,
        height:height/3+40,
        marginTop:10,
        backgroundColor:'#fff',
    },
    xgText:{
        height:70,
        width,
    },
    xgImg:{
         marginTop:-15,
         flexDirection: 'row',
         justifyContent: 'space-around',
    },
    cenImg1:{
        width:width/5,
        height:height/6,

    },
    text:{
        width:width/4,
        height:height/10,
    },
});
