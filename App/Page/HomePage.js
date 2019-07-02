/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {
    Component
  } from 'react';
  import {
    Platform,
    StyleSheet,
    Text,
    View
  } from 'react-native';
  
  
  import Navb from './Navbuttom'
  import NaivgationUtil from '../build/Navigator/NavigationUtil';
  export default class HomePage extends Component {
    render() {
      NaivgationUtil.navigation = this.props.navigation;
      return (
        <Navb></Navb>
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