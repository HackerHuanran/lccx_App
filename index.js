/**
 * @format
 */

import {AppRegistry} from 'react-native';
import AppNavigator from './App/build/Navigator/AppNavigator'
import {name as appName} from './app.json';
 //关闭黄色警告
 console.disableYellowBox = true // 关闭全部黄色警告

AppRegistry.registerComponent(appName, () => AppNavigator);
