import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

// type  Props = {};

export default class WelcomePage extends Component {

    componentDidMount() {
        this.timer = setTimeout(() => {
            NavigationUtil.resetToHomePage({navigation: this.props.navigation})
        }, 2000)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

   render() {
       return (
           <View style={style.container}>
               <Text style={style.welcome}>WelcomePage</Text>
           </View>
       );
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