import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';



// type  Props = {};

export default class PopularPage extends Component {

   render() {
       return (
           <View style={style.container}>
               <Text style={style.welcome}>PopularPage</Text>
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