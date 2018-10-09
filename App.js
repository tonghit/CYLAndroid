import React from 'react';
import { Button, Text, View,Dimensions,Image,StyleSheet,Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');


import SchoolScreen  from './Com/School/SchoolScreen';
import RidoScreen  from './Com/School/RidoScreen';
import RRScreen  from './Com/School/RRScreen';
import RRTwoScreen  from './Com/School/RRTwoScreen';
import RRThreeScreen  from './Com/School/RRThreeScreen';
import RRFourScreen  from './Com/School/RRFourScreen';
import RRFiveScreen  from './Com/School/RRFiveScreen';


import VoideScreen  from './Com/School/VoideScreen';
import VVScreen  from './Com/School/VVScreen';
import LookScreen  from './Com/School/LookScreen';
import LLScreen  from './Com/School/LLScreen';
import CateScreen  from './Com/School/CateScreen';





import PracticeScreen  from './Com/Practice/PracticeScreen';
import PracticeOneScreen  from './Com/Practice/PracticeOneScreen';
import PracticeTwoScreen  from './Com/Practice/PracticeTwoScreen';
import PracticeThreeScreen  from './Com/Practice/PracticeThreeScreen';
import PracticeFourScreen  from './Com/Practice/PracticeFourScreen';
import PracticeFiveScreen  from './Com/Practice/PracticeFiveScreen';
import SussesScreen  from './Com/Practice/SussesScreen';

import MineScreen  from './Com/Mine/MineScreen';
import LoinoneScreen  from './Com/Mine/LoinoneScreen';
import RegoneScreen  from './Com/Mine/RegoneScreen';
import ActoneScreen  from './Com/Mine/ActoneScreen';
import ChatboneScreen  from './Com/Mine/ChatboneScreen';
import AddfoneScreen  from './Com/Mine/AddfoneScreen';
import GallaoneScreen  from './Com/Mine/GallaoneScreen';
import ReconeScreen  from './Com/Mine/ReconeScreen';
import SetoneScreen  from './Com/Mine/SetoneScreen';



const SchoolStack = createStackNavigator({
  School: { screen: SchoolScreen },
  Rido: { screen: RidoScreen },
  RR: { screen: RRScreen },
  RRTwo: { screen: RRTwoScreen },
  RRThree: { screen: RRThreeScreen },
  RRFour: { screen: RRFourScreen },
  RRFive: { screen: RRFiveScreen },


  Voide: { screen: VoideScreen },
  VV: { screen: VVScreen },
  Look: { screen: LookScreen },
  LL: { screen: LLScreen },
  Cate: { screen: CateScreen },
});

const PracticeStack = createStackNavigator({
  Practice: { screen: PracticeScreen },
  PracticeOne: { screen: PracticeOneScreen },
  PracticeTwo: { screen: PracticeTwoScreen },
  PracticeThree: { screen: PracticeThreeScreen },
  PracticeFour: { screen: PracticeFourScreen },
  PracticeFive: { screen: PracticeFiveScreen },
  Susses: { screen: SussesScreen },
});

const MineStack = createStackNavigator({
  Mine: { screen: MineScreen },
  Loinone: { screen: LoinoneScreen },
  Regone: { screen: RegoneScreen },
  Actone: { screen: ActoneScreen },
  Chatbone: { screen: ChatboneScreen },
  Addfone: { screen: AddfoneScreen },
  Gallaone: { screen: GallaoneScreen },
  Recone: { screen: ReconeScreen },
  Setone: { screen: SetoneScreen },
});



export default createBottomTabNavigator(
  {
     School: {
        screen: SchoolStack,
        navigationOptions:{
            tabBarLabel: '学堂',
            tabBarIcon: ({ tintColor }) => {
                // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换class.png
                return <Image source={{uri:'asset:/class01.png'}}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
            }

            },

      },
     Practice: {
        screen: PracticeStack ,
        navigationOptions:{
           tabBarLabel: '练一练',
           tabBarIcon: ({ tintColor }) => {
               // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
               return <Image source={{uri:'asset:/practice.png'}}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
           }
       }
      },
     Mine: {
        screen: MineStack,
        navigationOptions:{
             tabBarLabel: '我的',
             tabBarIcon: ({ tintColor }) => {
               // tintColor传递进来的是颜色，选中的颜色,那么图标颜色也要换
               return <Image source={{uri:'asset:/mine.png'}}  style={[styles.tabBarImage,{tintColor: tintColor}]}/>
           }
         }
      },
  },
  {
    tabBarOptions: {
          activeTintColor: '#ec7289', // 选中的颜色
                  inactiveTintColor: '#333', // 不选中的颜色
                  showIcon: true, // 是否显示小图标
                  inactiveBackgroundColor:'#fff',
                  indicatorStyle: {
                      height: 0,
                  },
                  style: { // 可以设置tab的各种样式
                      backgroundColor: '#fff', // 底部tab的背景颜色
                      height:62, // 高度
                      borderTopWidth:1,
                      borderColor:'#ddd',
                  },
                  tabStyle: { // 设置底部图标的样式
                      height: 56,
                      marginTop:5,
                  },
                  labelStyle: { // 设置文字的样式
                      marginBottom:0,
                      fontSize: 18,
                  },
                  pressColor: 'gray', // 点击的时候光圈
                  pressOpacity: 0.8, // 光圈的透明度
                  upperCaseLabel: false, // 如果是英文的情况默认会转换为大写


        },
  }
);
const styles = StyleSheet.create({
    tabBarImage: {
        width: 35,
        height: 30,

    }
})

