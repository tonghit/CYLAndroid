/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Platform, StyleSheet,Text,Dimensions,View,Image,TouchableOpacity,FlatList,ScrollView} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
const { width,height } = Dimensions.get('window');
var REQUEST_URL =
    "http://www.everyinch.net/virtual/cyl/voide.json";
//import pct from "../pct"
export default class VoideScreen extends Component<Props> {
    constructor(props) {
             super(props);
             this.state = {
                 data: [],
                 loaded: false
             };
             // 在ES6中，如果在自定义的函数里使用了this关键字，则需要对其进行“绑定”操作，否则this的指向会变为空
             // 像下面这行代码一样，在constructor中使用bind是其中一种做法（还有一些其他做法，如使用箭头函数等）
             this.fetchData = this.fetchData.bind(this);
         }
    static navigationOptions = {
        title: '频道',
        headerStyle: {
          backgroundColor: '#fff',

        },
        headerTintColor: '#000',
        headerTitleStyle: {
          fontWeight: 'bold',
          alignSelf:'center'
        },
      };
      componentDidMount() {
          this.fetchData();
      }

   fetchData() {
           fetch(REQUEST_URL)
               .then(response => response.json())
               .then(responseData => {
                   // 注意，这里使用了this关键字，为了保证this在调用时仍然指向当前组件，我们需要对其进行“绑定”操作
                   this.setState({
                       data: this.state.data.concat(responseData),
                       loaded: true
                   });
               });
       }
  render() {
        const { navigate } = this.props.navigation
      return (
      <ScrollView>
            <View style={styles.schoolBackground}>
            <FlatList
                    data={this.state.data}
                     renderItem={({item})=>(
                            <View style={styles.band} >
                                  <View style={styles.one}>
                                     <TouchableOpacity onPress={()=>this.props.navigation.navigate("VV",{title:item.title,cImgURL:item.cImgURL,imgURL:item.imgURL})}>
                                        <Image source={{uri: item.imgURL}} style={styles.textOne}/>
                                     </TouchableOpacity>


                                      <Text style={styles.textTwo}
                                            onPress={()=>this.props.navigation.navigate("VV",{title:item.title,cImgURL:item.cImgURL,imgURL:item.imgURL})}
                                      >
                                      {item.title}
                                      </Text>
                                  </View>
                              </View>
                                )}
                    style={styles.list}
                  />
            </View>
            </ScrollView>
              );

    }

}

const styles = StyleSheet.create({
    schoolBackground:{
        height,
    },
    band:{
        width,
        height:height/9,
        marginTop:20,
        backgroundColor:'#fff',
        borderColor:'#000',
        borderWidth:1,
    },
    one:{flexDirection: 'row',},
    textOne:{borderColor:'#000',borderWidth:1,width:100,height:60,marginLeft:10,marginTop:5,resizeMode:'contain',backgroundColor:'#rgba(255, 204, 51, 1)'},
    textTwo:{marginLeft:30,textAlign:'center',marginTop:20,fontSize:15,color:'#000'},
    list: {
        backgroundColor: "#rgba(255, 204, 51, 1)"
      }
});
