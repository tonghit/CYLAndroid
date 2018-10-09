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
                          <View style={{height:height/30,width,marginLeft:26,}}>
                                            <Text style={styles.three}>rén   yǒu   xǐ   qìnɡ        bù   kě   shēnɡ    dù   jì   xīn
                                            </Text>
                                           </View>
                       <View style={{height:height/20,width,marginLeft:28,marginTop:5,}}>
                                         <Text style={styles.three}>人     有    喜    庆，       不   可      生        妒  忌   心．
                                         </Text>
                                        </View>
                       <View style={{height:height/30,width,marginLeft:20,}}>
                                         <Text style={styles.three}>rén  yǒu   huò  huàn       bù   kě  shēnɡ  xǐ   xìnɡ   xīn
                                         </Text>
                                        </View>
                       <View style={{height:height/20,width,marginLeft:23,marginTop:5,}}>
                                   <Text style={styles.three}>人    有      祸     患，      不   可     生     喜     幸     心。
                                   </Text>
                                  </View>
                       <View style={{height:height/30,width,marginLeft:33,}}>
                                      <Text style={styles.three}>shàn   yù    rén    jiàn      bù    shì   zhēn   shàn
                                      </Text>
                                     </View>
                      <View style={{height:height/20,width,marginLeft:40,marginTop:5,}}>
                                  <Text style={styles.three}>善      欲     人     见，    不     是      真       善．
                                  </Text>
                                 </View>
                 <View style={{height:height/30,width,marginLeft:60,}}>
                                   <Text style={styles.three}> è   kǒnɡ   rén   zhī      biàn  shì   dà   è
                                   </Text>
                                  </View>
                <View style={{height:height/20,width,marginLeft:61,marginTop:5,}}>
                                  <Text style={styles.three}>恶    恐      人     知        便     是    大  恶
                                  </Text>
                                 </View>
                 <View style={{height:height/30,width,marginLeft:40,}}>
                                     <Text style={styles.three}>jiàn   sè   ér   qǐ   yín   xīn      bào   zài   qī   nǚ
                                     </Text>
                                    </View>
                  <View style={{height:height/20,width,marginLeft:44,marginTop:5,}}>
                                    <Text style={styles.three}>见    色   而   起   淫    心，    报     在   妻   女
                                    </Text>
                                   </View>
               <View style={{height:height/30,width,marginLeft:22,}}>
                                   <Text style={styles.three}>nì   yuàn   ér    yònɡ   àn      jiàn   huò  yán   zǐ   sūn
                                   </Text>
                                  </View>
                <View style={{height:height/20,width,marginLeft:21,marginTop:5,}}>
                                  <Text style={styles.three}>匿     怨     而      用     暗       箭，   祸    延    子   孙。
                                  </Text>
                                 </View>
                 <View style={{height:height/30,width,marginLeft:0,}}>
                                    <Text style={styles.three}>jiā  mén  hé  shùn  suī  yōnɡ  sūn  bù  jì   yì  yǒu  yú  huān
                                    </Text>
                                   </View>
                 <View style={{height:height/20,width,marginLeft:0,marginTop:5,}}>
                                   <Text style={styles.three}>家    门    和    顺， 虽     饔     飧    不 继, 亦  有    余    欢．
                                   </Text>
                                  </View>
                 <View style={{height:height/30,width,marginLeft:10,}}>
                                     <Text style={styles.three}>ɡuó   kè  zǎo  wán   jí  nánɡ  tuó  wú  yú    zì  dé  zhì  lè
                                     </Text>
                                    </View>
                  <View style={{height:height/20,width,marginLeft:14,marginTop:5,}}>
                                    <Text style={styles.three}>国    课   早    完 ，即   囊     橐    无  余,   自  得   至  乐。
                                    </Text>
                                   </View>
                  <View style={{height:height/30,width,marginLeft:0,}}>
                                      <Text style={styles.three}>dú  shū  zhì  zài  shènɡ  xián   wéi  ɡuān  xīn  cún  jūn  ɡuó
                                      </Text>
                                     </View>
                 <View style={{height:height/20,width,marginLeft:0,marginTop:5,}}>
                                    <Text style={styles.three}>读    书   志   在      圣       贤 ， 为     官     心    存    君    国
                                    </Text>
                                    </View>
                <View style={{height:height/30,width,marginLeft:37,}}>
                                    <Text style={styles.three}>shǒu   fēn    ān    mìnɡ     shùn  shí   tīnɡ   tiān
                                     </Text>
                                     </View>
                 <View style={{height:height/20,width,marginLeft:45,marginTop:5,}}>
                                     <Text style={styles.three}>守      分     安      命，       顺    时     听      天
                                     </Text>
                                    </View>
                 <View style={{height:height/30,width,marginLeft:40,}}>
                                   <Text style={styles.three}>wéi   rén    ruò    cǐ          shù    hū     jìn     yān
                                   </Text>
                                   </View>
                 <View style={{height:height/20,width,marginLeft:43,marginTop:5,}}>
                                   <Text style={styles.three}>为     人      若    此，       庶      乎     近      焉
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
