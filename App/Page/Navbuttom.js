//App 下方导航几页面跳转路由
import React from 'react';
import {
    createBottomTabNavigator,
    createAppContainer
} from 'react-navigation';
//考核
import FavoritePage from './FavoritePage';
//我的
import MyPage from './MyPage';
//其他tab栏
import PopularPage from './PopularPage';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const TabNavigator = createBottomTabNavigator({
    FavoritePage: {
        screen: FavoritePage,
        navigationOptions: {
            tabBarLabel: "首页",
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'whatshot'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    PopularPage: {
        screen: PopularPage,
        navigationOptions: {
            tabBarLabel: "考核",
            tabBarIcon: ({tintColor, focused}) => (
                <MaterialIcons
                    name={'edit'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }
    },
    MyPage: {
        screen: MyPage,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({tintColor, focused}) => (
                <FontAwesome
                    name={'user'}
                    size={26}
                    style={{color: tintColor}}
                />
            )
        }        
    }
});

export default createAppContainer(TabNavigator);