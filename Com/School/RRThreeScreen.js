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
                          <View style={{height:height/30,width,marginLeft:30,}}>
                                            <Text style={styles.three}>xiōnɡ   dì   shū   zhí         xū   duō   fēn   rùn   ɡuǎ
                                            </Text>
                                           </View>
                       <View style={{height:height/20,width,marginLeft:39,marginTop:5,}}>
                                         <Text style={styles.three}>兄     弟     叔    侄，      须    多     分     润     寡．
                                         </Text>
                                        </View>
                       <View style={{height:height/30,width,marginLeft:32,}}>
                                         <Text style={styles.three}>zhǎnɡ   yòu   nèi   wài         yí   fǎ   shù   cí   yán
                                         </Text>
                                        </View>
                       <View style={{height:height/20,width,marginLeft:42,marginTop:5,}}>
                                   <Text style={styles.three}>长        幼     内    外，      宜   法    肃   辞   严。
                                   </Text>
                                  </View>
                       <View style={{height:height/30,width,marginLeft:7,}}>
                                      <Text style={styles.three}>tīnɡ   fù    yán       ɡuāi   ɡǔ    ròu        qǐ   shì   zhànɡ   fū
                                      </Text>
                                     </View>
                      <View style={{height:height/20,width,marginLeft:11,marginTop:5,}}>
                                  <Text style={styles.three}>听    妇     言，      乖     骨     肉，     岂   是       丈      夫．
                                  </Text>
                                 </View>
                 <View style={{height:height/30,width,marginLeft:12,}}>
                                   <Text style={styles.three}>zhònɡ   zī   cái       bó   fù   mǔ       bù   chénɡ   rén   zǐ
                                   </Text>
                                  </View>
                <View style={{height:height/20,width,marginLeft:25,marginTop:5,}}>
                                  <Text style={styles.three}>重      资  财，    薄   父    母，    不       成      人    子。
                                  </Text>
                                 </View>
                 <View style={{height:height/30,width,marginLeft:30,}}>
                                     <Text style={styles.three}>jià    nǚ   zé   jiā   xù         wú    suǒ    zhònɡ    pìn
                                     </Text>
                                    </View>
                  <View style={{height:height/20,width,marginLeft:30,marginTop:5,}}>
                                    <Text style={styles.three}>嫁    女    择   佳   婿，      毋     索         重        聘．
                                    </Text>
                                   </View>
               <View style={{height:height/30,width,marginLeft:35,}}>
                                   <Text style={styles.three}>qǔ    xí    qiú    shū   nǚ          wú    jì    hòu    lián
                                   </Text>
                                  </View>
                <View style={{height:height/20,width,marginLeft:35,marginTop:5,}}>
                                  <Text style={styles.three}>娶    媳    求      淑    女，       毋    计    厚      奁。
                                  </Text>
                                 </View>

                <View style={{height:height/30,width,marginLeft:0,}}>
                                    <Text style={styles.three}>jiàn  fù  ɡuì     ér   shēnɡ   chán   rónɡ  zhě     zuì   kě  chǐ
                                    </Text>
                                   </View>
                 <View style={{height:height/20,width,marginLeft:3,marginTop:5,}}>
                                   <Text style={styles.three}>见   富   贵     而      生         谗       容     者，   最    可   耻
                                   </Text>
                                  </View>
                 <View style={{height:height/30,width,marginLeft:15,}}>
                                     <Text style={styles.three}>yù  pín  qiónɡ  ér  zuò  jiāo  tài  zhě      jiàn  mò  shèn
                                     </Text>
                                    </View>
                  <View style={{height:height/20,width,marginLeft:15,marginTop:5,}}>
                                    <Text style={styles.three}>遇   贫     穷     而   作    骄    态   者，    贱    莫     甚。
                                    </Text>
                                   </View>
                  <View style={{height:height/30,width,marginLeft:20,}}>
                                      <Text style={styles.three}>jū  jiā  jiè  zhēnɡ  sònɡ       sònɡ   zé   zhōnɡ   xiōnɡ
                                      </Text>
                                     </View>
                 <View style={{height:height/20,width,marginLeft:18,marginTop:5,}}>
                                    <Text style={styles.three}>居  家  戒     争        讼，        讼     则      终         凶．
                                    </Text>
                                    </View>
                <View style={{height:height/30,width,marginLeft:27,}}>
                                    <Text style={styles.three}>chǔ    shì    jiè    duō   yán        yán   duō    bì   shī
                                     </Text>
                                     </View>
                 <View style={{height:height/20,width,marginLeft:30,marginTop:5,}}>
                                     <Text style={styles.three}>处      世     戒     多     言，       言     多     必   失。
                                     </Text>
                                    </View>
                 <View style={{height:height/30,width,marginLeft:40,}}>
                                   <Text style={styles.three}>wú    shì    shì    lì    ér    línɡ    bī    ɡū    ɡuǎ
                                   </Text>
                                   </View>
                 <View style={{height:height/20,width,marginLeft:41,marginTop:5,}}>
                                   <Text style={styles.three}>毋      恃     势   力   而     凌      逼    孤     寡
                                   </Text>
                                   </View>
                 <View style={{height:height/30,width,marginLeft:20,}}>
                                   <Text style={styles.three}>wù    tān    kǒu     fù     ér     zì     shā     shēnɡ    qín
                                   </Text>
                                   </View>
                <View style={{height:height/20,width,marginLeft:21,marginTop:5,}}>
                      <Text style={styles.three}>勿     贪      口       腹    而     恣     杀          生        禽。
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
