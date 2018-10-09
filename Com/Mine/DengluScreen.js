import React,{Component}from 'react';
import { Platform,StyleSheet,Button, Text, View ,Dimensions,ImageBackground,Image,AppRegistry,TextInput,TouchableOpacity,ProgressBarAndroid,} from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';


const { width,height } = Dimensions.get('window');
export default class MineScreen extends React.Component {
      static navigationOptions = {
              title: '用户登录',
              headerStyle: {
                    backgroundColor: '#fff',
                  },
              headerTintColor: '#000',
              headerTitleStyle: {
                    fontWeight: 'bold',
                  },
            };
  render() {
    return (
        <View style={styles.container}>
                <Image style={{width: 100, height: 100, alignSelf: 'center', marginTop: 20}}
                             source={{uri:'asset:/suosuobeijing02.jpg'}} />
                <TextInput style={styles.name}
                           placeholder={'手机号/邮箱'}
                           numberOfLines={1}
                           underlineColorAndroid={'transparent'}
                           autoFocus={false}
                           textAlign="center"/>
                <View style={{height: 1, backgroundColor: '#f4f4f4'}}/>
                <TextInput style={styles.password}
                           placeholder={'密码'}
                           numberOfLines={1}
                           underlineColorAndroid={'transparent'}
                           secureTextEntry={true}
                           textAlign="center"
                />
                <View style={styles.login}>
                    <Text onPress={() => this.props.navigation.navigate('Mine')}>登录</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 50, alignItems: 'flex-end'}}>
                    <Text style={{marginLeft: 10,fontSize:17, color: '#ffffff'}}>
                        忘记密码？
                    </Text>
                    <Text style={{
                        marginRight: 10,
                        color: '#FFFFFF',
                        alignItems: 'flex-end',
                        textAlign: 'right',
                        fontSize:17,
                        flex: 1
                    }} onPress={() => this.props.navigation.navigate('NewUser')}>
                        新用户注册
                    </Text>
                </View>
        </View>
    );
  }
}

 const styles = StyleSheet.create({
    container: {
                flex: 1,
                backgroundColor: '#86b2df',
            },
            name: {
                backgroundColor: '#FFF',
                height: 50,
                marginTop: 50,
                fontSize: 15,
            },
            password: {
                backgroundColor: '#FFF',
                height: 50,
                fontSize: 15,
            },
            login: {
                height: 40,
                marginLeft: 10,
                marginRight: 10,
                backgroundColor: '#1E90FF',
                marginTop: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
            },
 })



