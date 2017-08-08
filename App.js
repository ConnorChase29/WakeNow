import React from 'react';

import { AppRegistry, View, StyleSheet, Text } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from './screens/LoginScreen.js';

import HomeScreen from './screens/HomeScreen.js';

import ProfileScreen from './screens/ProfileScreen.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
