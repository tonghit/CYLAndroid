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
import {RadioGroup, RadioButton} from 'react-native-flexi-radio-button'
//import pct from "../pct"
export default class PracticeThreeScreen extends Component<Props> {
    constructor(){
            super()
            this.state = {
                text: ''
            }
            this.onSelect = this.onSelect.bind(this)
        }

        onSelect(index, value){
            this.setState({
            text: `Selected index: ${index} , value: ${value}`
            })
        }

    static navigationOptions = {
        title: '第三部分',
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
               <View>
                    <View style={styles.textOne}>
                        <Text style={styles.tOne}>1.（法肃）的拼音是？</Text>
                    </View>
                    <View style={styles.one}>
                        <RadioGroup onSelect = {(index, value) => this.onSelect(index, value)}>
                              <RadioButton value={'item1'} >
                                  <Text>A. lí  mínɡ</Text>
                              </RadioButton>

                             <RadioButton value={'item2'}>
                                  <Text>B. fǎ   shù </Text>
                              </RadioButton>

                             <RadioButton value={'item3'}>
                                  <Text>C. mén  hù</Text>
                             </RadioButton>

                             <RadioButton value={'item4'}>
                                   <Text>D.bú  yì</Text>
                              </RadioButton>
                         </RadioGroup>

                    </View>
               </View>

               <View>
                       <View style={styles.textOne}>
                           <Text style={styles.tOne}>2.（见富贵而生谄容者，最可耻）的下一句是？</Text>
                       </View>
                       <View style={styles.one}>
                           <RadioGroup onSelect = {(index, value) => this.onSelect(index, value)}>
                                 <RadioButton value={'item1'} >
                                     <Text>C   遇贫穷而作骄态者，贱莫甚</Text>
                                 </RadioButton>

                                <RadioButton value={'item2'}>
                                     <Text>B   必 亲 自 检 点</Text>
                                 </RadioButton>

                                <RadioButton value={'item3'}>
                                     <Text>C   勿 谋 良 田</Text>
                                </RadioButton>

                                <RadioButton value={'item4'}>
                                      <Text>D   宴 客 切 勿 留 连</Text>
                                 </RadioButton>
                            </RadioGroup>

                       </View>
                  </View>

                  <View>
                          <View style={styles.textOne}>
                              <Text style={styles.tOne}>3.（居家戒争讼，讼则终凶）的下一句是？</Text>
                          </View>
                          <View style={styles.one}>
                              <RadioGroup onSelect = {(index, value) => this.onSelect(index, value)}>
                                    <RadioButton value={'item1'} >
                                        <Text>A    勿 谋 良 田</Text>
                                    </RadioButton>

                                   <RadioButton value={'item2'}>
                                        <Text>B   半丝半缕，恒念物力维艰。</Text>
                                    </RadioButton>

                                   <RadioButton value={'item3'}>
                                        <Text>C   处世戒多言，言多必失</Text>
                                   </RadioButton>

                                   <RadioButton value={'item4'}>
                                         <Text>D   瓦缶胜金玉</Text>
                                    </RadioButton>
                               </RadioGroup>

                          </View>
                     </View>
                     <View>
                         <View style={styles.textOne}>
                             <Text style={styles.tOne}> 4.处世戒多言，言多必失的意思是？</Text>
                         </View>
                         <View style={styles.one}>
                             <RadioGroup onSelect = {(index, value) => this.onSelect(index, value)}>
                                   <RadioButton value={'item1'} >
                                       <Text>A    在公共场合大声喧哗</Text>
                                   </RadioButton>

                                  <RadioButton value={'item2'}>
                                       <Text>B   随便讲别人的秘密</Text>
                                   </RadioButton>

                                  <RadioButton value={'item3'}>
                                       <Text>C   在别人背后说坏话</Text>
                                  </RadioButton>

                                  <RadioButton value={'item4'}>
                                        <Text>D   在外和别人打交道，尽可能的少说话</Text>
                                   </RadioButton>
                              </RadioGroup>

                         </View>
                    </View>
                    <View style={styles.two}>
                           <Text style={styles.tOnee} onPress={() => this.props.navigation.navigate('Susses')}>提交</Text>
                    </View>
               </View>
        </ScrollView>
              );

    }

}

const styles = StyleSheet.create({
    schoolBackground:{
        width,
        backgroundColor:'#rgba(255, 204, 51, 1)',
    },
    one:{
        width:width-150,
        flexDirection: 'row',
//        justifyContent: 'space-around',
        marginLeft:50,
    },
    textOne:{
        width:width-100,
        marginLeft:50,
        marginTop:20,
        borderWidth:1,
        borderColor:'#000',
        backgroundColor:'#fff',
    },
    tOne:{
        color:'#000',
        fontSize:20,
        paddingTop:5,
        paddingLeft:10
    },
    two:{
        width:width/4,
        marginLeft:150,
        marginTop:20,
        borderWidth:1,
        borderColor:'#000',
        backgroundColor:'#fff',
        marginBottom:30,
    },
    tOnee:{
        color:'#000',
        fontSize:20,
        paddingTop:5,
        paddingLeft:20
    }
});
