
import {
    createMaterialTopTabNavigator, createAppContainer
} from 'react-navigation';

import Tab1 from './Tabone';
import Tab2 from './Tabtow';
const TabNavigator = createMaterialTopTabNavigator({
    PopularTab1: {
        screen: Tab1,
        navigationOptions: {
            tabBarLabel: "学习"
        }
    },
    PopularTab2: {
        screen: Tab2,
        navigationOptions: {
            tabBarLabel: "考核"
        }
    }
});

export default createAppContainer(TabNavigator);