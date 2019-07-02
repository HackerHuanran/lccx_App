/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,AsyncStorage} from 'react-native';



export default class FavoritePage extends Component{
  constructor(props){
    super(props)
    this.state={
      token:''
    }
  }
  componentDidMount(){
    AsyncStorage.getItem("token").then((value) => {
        this.setState({token:value})
    });
    if(this.state.token.length > 0 ){
      //有token
      
    }else{
      //没有token

    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{this.state.token}</Text>
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
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
