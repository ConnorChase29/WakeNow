import React from 'react';

import {
  AppRegistry,
  View,
  ScrollView,
  StyleSheet,
  Text,
  Image,
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import LoginForm from '../src/components/LoginForm.js';

import HomeScreen from '../screens/HomeScreen.js';

import ProfileScreen from '../screens/ProfileScreen.js';

export default class LoginScreen extends React.Component {
  render() {
    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <Text style={styles.loginScreenText}>WakeNow</Text>

          <Text style={styles.loginScreenText2}>
            Create an account to get started
          </Text>

          <Image
            style={styles.profileImage}
            source={{ uri: 'http://unsplash.it/100/100' }}
          />

          <LoginForm />

          <Image
            style={styles.reactImage}
            source={require('../assets/react-logo.png')}
          />
        </View>
      </ScrollView>
    );
  }
}

/*const HomeStack = StackNavigator({
  Home: { screen: HomeScreen },
});

const ProfileStack = StackNavigator({
  Profile: { screen: ProfileScreen },
});

const AppNavigation = TabNavigator({
  Home: { screen: HomeStack },
  Profile: { screen: ProfileStack },
});*/

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#3498db',
    alignSelf: 'stretch',
  },
  container: {
    alignItems: 'center',
  },

  loginScreenText: {
    fontSize: 40,
    paddingTop: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',
  },

  loginScreenText2: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 25,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',
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
  },
});
