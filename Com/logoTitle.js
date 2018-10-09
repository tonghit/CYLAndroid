/**
 * Created by lijiabin on 2018/5/6.
 */
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
} from 'react-native';
const { width,height } = Dimensions.get('window');
export default class LogoTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: '请输入' };
      }
    render() {
        return (
            <View style={{flexDirection: 'row',justifyContent:'center',alignItems:'center'}}>
                <View>
                    <Image source={{uri:'asset:/pct1.png'}}
                            style={{width:width/11,height:height/14,marginTop:20,marginLeft:10}}/>
                </View>
                <View style={{flex:1,}}>
                    <TextInput
                           style={{
                                height:height/19, borderColor: 'gray',
                                borderWidth: 1,marginLeft:25,backgroundColor:'#fff',
                               }}
                           onChangeText={(text) => this.setState({text})}
                           value={this.state.text}
                           editable = {true}
                           maxLength = {20}/>
                </View>
            </View>
            // <Text style={{textAlign:"center"}}>一东</Text>
        );
    }
}