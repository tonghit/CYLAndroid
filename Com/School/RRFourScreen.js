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
export default class RRTwoScreen extends Component<Props> {


  render() {
        return (
                <ScrollView>
                              <View style={styles.schoolBackground}>
                          <View style={{height:height/30,width,marginLeft:55,}}>
                                            <Text style={styles.three}>ɡuāi   pì  zì  shì         huǐ   wù    bì  duō
                                            </Text>
                                           </View>
                       <View style={{height:height/20,width,marginLeft:62,marginTop:5,}}>
                                         <Text style={styles.three}>乖    僻  自  是，      悔    误     必    多．
                                         </Text>
                                        </View>
                       <View style={{height:height/30,width,marginLeft:48,}}>
                                         <Text style={styles.three}>tuí   duò   zì   ɡān         jiā   dào   nán  chénɡ
                                         </Text>
                                        </View>
                       <View style={{height:height/20,width,marginLeft:49,marginTop:5,}}>
                                   <Text style={styles.three}>颓    惰    自    甘，      家    道      难      成。
                                   </Text>
                                  </View>
                       <View style={{height:height/30,width,marginLeft:49,}}>
                                      <Text style={styles.three}>xiá   nì   è   shào        jiǔ    bì   shòu    qí    lěi
                                      </Text>
                                     </View>
                      <View style={{height:height/20,width,marginLeft:50,marginTop:5,}}>
                                  <Text style={styles.three}>狎   昵  恶    少，       久    必    受      其    累．
                                  </Text>
                                 </View>
                 <View style={{height:height/30,width,marginLeft:46,}}>
                                   <Text style={styles.three}>qū   zhì   lǎo   chénɡ      jí   zé   kě   xiānɡ   yī
                                   </Text>
                                  </View>
                <View style={{height:height/20,width,marginLeft:48,marginTop:5,}}>
                                  <Text style={styles.three}>屈    志   老       成，     急  则   可      相     依。
                                  </Text>
                                 </View>
                 <View style={{height:height/30,width,marginLeft:8,}}>
                                     <Text style={styles.three}>qīnɡ   tīnɡ   fā   yán     ān   zhī   fēi   rén   zhī   zèn  shuò
                                     </Text>
                                    </View>
                  <View style={{height:height/20,width,marginLeft:15,marginTop:5,}}>
                                    <Text style={styles.three}>轻      听    发    言，   安   知    非    人     之     谮     愬
                                    </Text>
                                   </View>
                 <View style={{height:height/30,width,marginLeft:90,}}>
                                   <Text style={styles.three}>dānɡ    rěn    nài   sān    sī
                                   </Text>
                                   </View>
                 <View style={{height:height/20,width,marginLeft:98,marginTop:5,}}>
                                   <Text style={styles.three}>当       忍      耐     三     思．
                                   </Text>
                                   </View>
               <View style={{height:height/30,width,marginLeft:2,}}>
                                   <Text style={styles.three}>yīn   shì   xiānɡ   zhēnɡ      ān   zhī   fēi   wǒ   zhī    bù   shì
                                   </Text>
                                  </View>
                <View style={{height:height/20,width,marginLeft:4,marginTop:5,}}>
                                  <Text style={styles.three}>因    事       相        争，       安   知    非    我    之     不    是
                                  </Text>
                                 </View>
                 <View style={{height:height/30,width,marginLeft:91,}}>
                                   <Text style={styles.three}>xū   pínɡ  xīn   àn   xiǎnɡ
                                   </Text>
                                   </View>
                <View style={{height:height/20,width,marginLeft:92,marginTop:5,}}>
                      <Text style={styles.three}>须     平    心    暗     想。
                      </Text>
                      </View>
                <View style={{height:height/30,width,marginLeft:25,}}>
                                    <Text style={styles.three}>shī    huì    wù    niàn       shòu    ēn     mò    wànɡ
                                    </Text>
                                   </View>
                 <View style={{height:height/20,width,marginLeft:27,marginTop:5,}}>
                                   <Text style={styles.three}>施     惠     勿       念，       受       恩     莫        忘。
                                   </Text>
                                  </View>
                 <View style={{height:height/30,width,marginLeft:5,}}>
                                     <Text style={styles.three}>fán  shì  dānɡ   liú    yú    dì        dé   yì   bù   yí  zài  wǎnɡ
                                     </Text>
                                    </View>
                  <View style={{height:height/20,width,marginLeft:7,marginTop:5,}}>
                                    <Text style={styles.three}>凡   事     当      留    余    地，    得   意  不   宜   再    往。
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
