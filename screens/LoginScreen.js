import React from 'react';

import {

  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,

} from 'react-native';

//import { StackNavigator } from 'react-navigation';

import LoginForm from '../src/components/LoginForm.js';


export default class LoginScreen extends React.Component {

  render() {

    return (

      <View style= { styles.container } >

        <Text style= { styles.loginScreenText } >WakeNow</Text>

        <Text style= { styles.loginScreenText2 }> Create an account to get started </Text>

        <Image style= { styles.profileImage } source= {{ uri: 'http://unsplash.it/100/100' }} />

        <LoginForm />

        <Image style= { styles.reactImage } source= { require ('../assets/react-logo.png') } />

      </View>

    );

  }

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#3498db',
    width: 400,

  },

  loginScreenText: {

    fontSize: 40,
    paddingTop: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white'

  },

  loginScreenText2: {

    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 25,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white'

  },

  profileImage: {

    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'grey',

  },

  reactImage: {

    flex: 1,
    width: 225,
    height: 225,
    paddingTop: 230,
    resizeMode: 'contain',

  }

});