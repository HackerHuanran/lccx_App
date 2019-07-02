import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import WelcomePage from '../../Page/WelcomePage'
import DetailPage from '../../Page/DetailPage'
import HomePage from '../../Page/HomePage'
import LoginPage from '../../Page/LoginPage'

const MainNavigator = createStackNavigator({
  LoginPage:{
    screen:LoginPage
  },
  HomePage: {
    screen:HomePage,
    navigationOptions: {
          header: null
        }
  },
  DetailPage: {
    screen:DetailPage
  }
});
const InitNavigator = createStackNavigator({
   WelcomePage: {
    screen:WelcomePage,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(createSwitchNavigator(
  {
    Init: InitNavigator,
    Main: MainNavigator,
  },
  {
    initialRouteName: 'Init',
  }
));
