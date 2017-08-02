import React from 'react';
import {

  StyleSheet,
  Text,
  View,
  Image,

} from 'react-native';
import LoginForm from '../src/components/LoginForm.js';

export default class LoginScreen extends React.Component {

  render() {

    return (

      <View style= { styles.container } >

        <Text style= { styles.loginScreenText }> WakeNow </Text>

        <Text style= { styles.loginScreenText2 }> A powerful resource that can alter the habits of even the worst morning haters </Text>

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
    paddingTop: 100,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white'

  },

  loginScreenText2: {

    fontSize: 20,
    paddingTop: 25,
    paddingBottom: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white'

  },

  reactImage: {

    flex: 1,
    width: 225,
    height: 225,
    paddingTop: 275,
    resizeMode: 'contain',

  }

});