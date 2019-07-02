import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import NavigatorUtil from '../build/Navigator/NavigationUtil'
export default class Tab1 extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>点击进入详情页</Text>
        <Text onPress={() => {
            NavigatorUtil.goPage({
                navigation: this.props.navigation
            }, "DetailPage")
        }}>跳转到详情页</Text>
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
