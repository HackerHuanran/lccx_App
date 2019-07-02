//App欢迎界面展示
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Image} from 'react-native';
import NaivgationUtil from '../build/Navigator/NavigationUtil';

export default class WelcomePage extends Component{
    componentDidMount() {
        this.timer = setTimeout(() => {
            NaivgationUtil.resetToHomePage({
                navigation: this.props.navigation
            })
        }, 2000);
    }
    componentWillUnmount() {
        this.timer&&clearTimeout(this.timer);
    }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../img/download.png')}
          style={styles.base}>
        </Image>  
        <Text style={styles.welcome}>欢迎使用信用修复系统</Text>
        <Text style={styles.bbootn}>V1.0</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#303133',
  },
  bbootn:{
    fontSize:12,
    textAlign:'center',
    position: "absolute",
    bottom: 20,
  },
  base:{
  }
});
