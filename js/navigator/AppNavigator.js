import {
    createMaterialTopNavigator ,
    createBottomTabNavigator,
    createSwitchNavigator,
    createAppContainer
}
from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import WelcomePage from '../page/WelcomePage'
import HomePage from '../page/HomePage'
import DetialPage from '../page/DetailPage'
import DetailPage from '../page/DetailPage'

const InitNavigator = createStackNavigator({
     WelcomePage: {
         screen: WelcomePage,
         navigationOptions: {
             header: null, // 禁用StackNavigator的NavigationBar
         }
     }
 })

const MainNavigator = createStackNavigator({
    HomePage : {
        screen: HomePage,
        navigationOptions: {
            header: null,
        }
    },
    DetialPage: {
        screen: DetailPage,
        navigationOptions: {
            header: null,
        }
    }
})

const SwitchNavigator = createSwitchNavigator({
    Init: InitNavigator,
    Main: MainNavigator,
}, {
    navigationOptions: {
        header: null,
    }
})

export default createAppContainer(SwitchNavigator)