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
export default class RRScreen extends Component<Props> {


  render() {
        return (
        <ScrollView>
               <View style={styles.schoolBackground}>
                <View style={{height:height/25,width:width/2,marginLeft:90,}}>
                  <Text style={{fontSize:18,}}>zhū  zǐ  zhì  jiā  ɡé  yán
                  </Text>
                 </View>
          <View style={{height:height/30,width,marginLeft:82,marginTop:5,}}>
                              <Text style={{fontSize:18,}}>《朱  子  治  家   格  言》
                              </Text>
                             </View>
         <View style={{height:height/30,width:width/2,marginLeft:90,}}>
                           <Text style={{marginTop:5,}}>zuò zhě      qīnɡ   zhū  bǎi   lú
                           </Text>
                          </View>
           <View style={{height:height/20,width,marginLeft:95,marginTop:5,}}>
                             <Text style={styles.three}>作  者 ：    [清]   朱   柏   庐
                             </Text>
                            </View>
           <View style={{height:height/30,width,}}>
                             <Text style={styles.three}> lí  mínɡ  jí  qǐ    sǎ  sǎo  tínɡ  chú   yào  nèi  wài zhěnɡ  jié
                             </Text>
                            </View>
        <View style={styles.two}>
                          <Text style={{height:height/20,width,marginTop:5,}}>黎   明    即 起，洒   扫    庭     除， 要    内    外     整     洁
                          </Text>
                         </View>
        <View style={{height:height/30,width,marginLeft:20,}}>
                          <Text style={styles.three}>jì  hūn biàn xī   ɡuān suǒ mén hù    bì qīn zì jiǎn diǎn
                          </Text>
                         </View>
        <View style={{height:height/20,width,marginLeft:17,marginTop:5,}}>
                    <Text style={styles.three}>既  昏    便   息， 关    锁    门   户,   必  亲 自  检   点
                    </Text>
                   </View>
        <View style={{height:height/30,width,marginLeft:20,}}>
                       <Text style={styles.three}>yì zhōu yì fàn    dānɡ sī lái chù  bú yì    bàn sī bàn lǚ
                       </Text>
                      </View>
       <View style={{height:height/20,width,marginLeft:18,marginTop:5,}}>
                   <Text style={styles.three}>一   粥   一 饭，   当   思 来  处   不 易． 半  丝  半 缕，
                   </Text>
                  </View>
  <View style={{height:height/30,width,marginLeft:75,}}>
                    <Text style={styles.three}>hénɡ    niàn    wù      lì    wéi    jiān
                    </Text>
                   </View>
 <View style={{height:height/20,width,marginLeft:83,marginTop:5,}}>
                   <Text style={styles.three}>恒        念       物     力     维     艰。
                   </Text>
                  </View>
  <View style={{height:height/30,width,marginLeft:22,}}>
                      <Text style={styles.three}>yí  wèi  yǔ  ér  chóu  miào   wú  lín  kě  ér   jué  jǐnɡ
                      </Text>
                     </View>
   <View style={{height:height/20,width,marginLeft:21,marginTop:5,}}>
                     <Text style={styles.three}>宜  未   雨  而     绸     缪，   毋   临  渴  而   掘   井。
                     </Text>
                    </View>
<View style={{height:height/30,width,marginLeft:22,}}>
                    <Text style={styles.three}>zì fènɡ  bì    xū jiǎn yuē     yàn  kè qiè wù  liú lián
                    </Text>
                   </View>
 <View style={{height:height/20,width,marginLeft:21,marginTop:5,}}>
                   <Text style={styles.three}>自  奉    必   须   俭   约，    宴   客 切  勿   留  连。
                   </Text>
                  </View>

 <View style={{height:height/30,width,marginLeft:50,}}>
                     <Text style={styles.three}> qì  jù  zhì  ér  jié      wǎ  fǒu  shènɡ  jīn  yù
                     </Text>
                    </View>
  <View style={{height:height/20,width,marginLeft:52,marginTop:5,}}>
                    <Text style={styles.three}>器 具  质   而  洁，   瓦   缶       胜     金  玉。
                    </Text>
                   </View>
  <View style={{height:height/30,width,marginLeft:22,}}>
                      <Text style={styles.three}>   yǐn  shí  yuē  ér  jīnɡ     yuán  shū   shènɡ  zhēn  xiū
                      </Text>
                     </View>
   <View style={{height:height/20,width,marginLeft:35,marginTop:5,}}>
                     <Text style={styles.three}>饮   食   约    而   精，     园     蔬        胜       珍     馐。
                     </Text>
                    </View>
   <View style={{height:height/30,width,marginLeft:35,}}>
                       <Text style={styles.three}>  wù   yínɡ  huá    wū         wù   móu  liánɡ tián
                       </Text>
                      </View>
    <View style={{height:height/20,width,marginLeft:45,marginTop:5,}}>
                      <Text style={styles.three}>勿     营     华     屋，       勿      谋     良     田。
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
    one:{height:height/10,

    }

});
