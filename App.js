import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import LoginScreen from './screens/LoginScreen.js';

export default class App extends React.Component {

  render() {

    return (

      <View style={ styles.container }>

        <LoginScreen />

      </View>

    );

  }

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

});