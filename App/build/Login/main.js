/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage
} from 'react-native';
import EditView from './lib/EditView';
import LoginButton from './lib/LoginButton';
import HomePage from '../../Page/HomePage';
export default class LoginActivity extends Component {
  constructor(props) {
    super(props);
    
    this.state={
        captchaPath : '',
        userName:"admin",
        password : "lccx2018",
        uuid : '',
        captcha : ''
    }
    this.age = 123;
  }
  /**
 * 获取uuid
 */
 getUUID () {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
      return (c === 'x' ? (Math.random() * 16 | 0) : ('r&0x3' | '0x8')).toString(16)
    })
  }
componentDidMount(){
  //验证码获取
    let uid=this.getUUID()
    //get请求
    let url='http://www.wangdexin.cn/lccx/captcha.jpg?uuid='+uid;
    this.setState({
      captchaPath:url,
      uuid:uid
    })
}
  render() {
      return (
    <View style={LoginStyles.loginview}>
     <View   style={{flexDirection: 'row',height:100,marginTop:40,
        justifyContent: 'center',
        alignItems: 'flex-start',
        }}>
       <Image source={require('../../img/download.png')}/>
     </View>
     <View style={{marginTop:40}}>
       <EditView  name='输入用户名/注册手机号' value={this.state.userName} onChangeText={(text) => {
            this.state.userName = text;
        }}/>
       <EditView name='输入密码' value={this.state.password} onChangeText={(text) => {
            this.state.password = text;
        }}/>
        <EditView name='验证码' onChangeText={(text) => {
            this.state.captcha = text;
        }}/>
        <Image style={LoginStyles.img} source={{uri: this.state.captchaPath}}/>
        <LoginButton name='登录' onPressCallback={this.onPressCallback}/>
      </View>
     </View>
   )
  }

//点击登陆事件
  onPressCallback = () => {
    let url = "http://www.wangdexin.cn/lccx/sys/login";
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          uuid: this.state.uuid,
          captcha: this.state.captcha,
          username:this.state.userName,
          password:this.state.password,
        })
    }).then((response) => response.json())
    .then((responseText) => {
        //存储token
       if(responseText && responseText.code===0){
         AsyncStorage.setItem('token',responseText.token);
         alert('登陆成功')
         this.onLoginSuccess();
       }else{
            alert(responseText.msg)
            this.componentDidMount();
       }
    }).done();
  };
  //誊录成功跳转页面方法
    onLoginSuccess(){
     const { navigator } = this.props;
     if (navigator) {
       navigator.push({
         name : 'Home',
         component : HomePage,
       });
     }
   }

}

const LoginStyles = StyleSheet.create({
  loginview: {
    padding: 30,
      backgroundColor: '#ffffff',
  },
  img:{
    width:180,
    height:50,
    marginTop:10
  },
});
