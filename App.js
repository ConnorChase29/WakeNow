import React from 'react';

import {

  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry

} from 'react-native';

//import { StackNavigator } from 'react-navigation';

//import LoginScreen from './screens/LoginScreen.js';

import HomeScreen from './screens/HomeScreen.js';

export default class App extends React.Component {

  render() {

    return (

      <View style={ styles.container }>

        <HomeScreen />

      </View>

    );

  }

}

/*const WakeNow = StackNavigator({

  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },

});*/

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

});