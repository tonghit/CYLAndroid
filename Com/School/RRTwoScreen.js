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
                          <View style={{height:height/30,width,marginLeft:60,}}>
                                            <Text style={styles.three}>sān  ɡū   liù   pó    shí  yín  dào  zhī  méi
                                            </Text>
                                           </View>
                       <View style={{height:height/20,width,marginLeft:62,marginTop:5,}}>
                                         <Text style={styles.three}>三    姑   六   婆， 实   淫    盗    之    媒．
                                         </Text>
                                        </View>
                       <View style={{height:height/30,width,marginLeft:60,}}>
                                         <Text style={styles.three}>bì  měi  qiè  jiāo       fēi  ɡuī  fánɡ zhī   fú
                                         </Text>
                                        </View>
                       <View style={{height:height/20,width,marginLeft:59,marginTop:5,}}>
                                   <Text style={styles.three}>婢   美    妾   娇，     非   闺    房    之   福。
                                   </Text>
                                  </View>
                       <View style={{height:height/30,width,marginLeft:10,}}>
                                      <Text style={styles.three}>nú  pú  wù  yònɡ  jùn  měi      qī  qiè  qiè  jì  yàn  zhuānɡ
                                      </Text>
                                     </View>
                      <View style={{height:height/20,width,marginLeft:10,marginTop:5,}}>
                                  <Text style={styles.three}>奴   仆  勿     用     俊    美，    妻  妾   切 忌   艳      妆。
                                  </Text>
                                 </View>
                 <View style={{height:height/30,width,marginLeft:40,}}>
                                   <Text style={styles.three}>zǔ  zōnɡ  suī  yuǎn        jì  sì  bù  kě  bù  chénɡ
                                   </Text>
                                  </View>
                <View style={{height:height/20,width,marginLeft:40,marginTop:5,}}>
                                  <Text style={styles.three}>祖    宗     虽    远，      祭 祀  不  可  不     诚．
                                  </Text>
                                 </View>
                 <View style={{height:height/30,width,marginLeft:40,}}>
                                     <Text style={styles.three}>zǐ  sūn  suī   yú         jīnɡ  shū   bù  kě  bù  dú
                                     </Text>
                                    </View>
                  <View style={{height:height/20,width,marginLeft:39,marginTop:5,}}>
                                    <Text style={styles.three}>子  孙    虽    愚，      经     书    不   可  不  读。
                                    </Text>
                                   </View>
               <View style={{height:height/30,width,marginLeft:10,}}>
                                   <Text style={styles.three}>jū  shēn  wù  qī  zhì  pǔ         jiào   zǐ   yào  yǒu  yì  fānɡ
                                   </Text>
                                  </View>
                <View style={{height:height/20,width,marginLeft:9,marginTop:5,}}>
                                  <Text style={styles.three}>居    身    务   期  质   朴，      教    子    要    有   义   方。
                                  </Text>
                                 </View>

                <View style={{height:height/30,width,marginLeft:10,}}>
                                    <Text style={styles.three}>wù  tān  yì  wài  zhī  cái         wù  yǐn  ɡuò  liànɡ  zhī  jiǔ
                                    </Text>
                                   </View>
                 <View style={{height:height/20,width,marginLeft:11,marginTop:5,}}>
                                   <Text style={styles.three}>勿   贪   意   外   之   财，       勿   饮    过     量     之  酒。
                                   </Text>
                                  </View>
                 <View style={{height:height/30,width,marginLeft:45,}}>
                                     <Text style={styles.three}>yǔ  jiān  tiāo  mào  yì      wù  zhàn  pián  yí
                                     </Text>
                                    </View>
                  <View style={{height:height/20,width,marginLeft:45,marginTop:5,}}>
                                    <Text style={styles.three}>与   肩    挑     贸   易，   勿     占     便    宜．
                                    </Text>
                                   </View>
                  <View style={{height:height/30,width,marginLeft:50,}}>
                                      <Text style={styles.three}>jiàn  pín  kǔ   qīn   lín     xū  duō  wēn  xù
                                      </Text>
                                     </View>
                 <View style={{height:height/20,width,marginLeft:53,marginTop:5,}}>
                                    <Text style={styles.three}>见    贫    苦   亲   邻，  须   多     温    恤。
                                    </Text>
                                    </View>
                <View style={{height:height/30,width,marginLeft:45,}}>
                                    <Text style={styles.three}> kè   bó   chénɡ   jiā        lǐ    wú   jiǔ   xiǎnɡ
                                     </Text>
                                     </View>
                 <View style={{height:height/20,width,marginLeft:49,marginTop:5,}}>
                                     <Text style={styles.three}>刻   薄      成       家，   理    无   久      享．
                                     </Text>
                                    </View>
                 <View style={{height:height/30,width,marginLeft:35,}}>
                                   <Text style={styles.three}>lún  chánɡ  ɡuāi  chuǎn         lì  jiàn  xiāo   wánɡ
                                   </Text>
                                   </View>
                 <View style={{height:height/20,width,marginLeft:37,marginTop:5,}}>
                                   <Text style={styles.three}>伦      常       乖       舛，        立  见    消       亡。
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
