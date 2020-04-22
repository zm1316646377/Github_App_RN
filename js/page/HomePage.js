import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
    createBottomTabNavigator,
}
from 'react-navigation-tabs'
import PopularPage from './PopularPage'
import TrendingPage from './TrendingPage'
import FavoritePage from './FavoritePage'
import MyPage from './MyPage'

// type  Props = {};

export default class HomePage extends Component {

    getTabNavigator() {
        return (
            createBottomTabNavigator({
                PopularPage: {
                    screen: PopularPage,
                    navigationOptions: {
                        tabBarLabel: '最热'
                    }
                },
                TrendingPage: {
                     screen: TrendingPage
                 },
                 FavoritePage: {
                     screen: FavoritePage
                 },
                 MyPage: {
                     screen: MyPage
                 },
            })
        )
        // <View style={style.container}>
        //         <Text style={style.welcome}>HomePage</Text>
        //   </View>
       
    }

   render() {
        return  this.getTabNavigator()
   }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instruction: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
})