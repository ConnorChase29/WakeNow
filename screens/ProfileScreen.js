import React from 'react';

import { AppRegistry, View, StyleSheet, Text } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import LoginScreen from '../screens/LoginScreen.js';

import HomeScreen from '../screens/HomeScreen.js';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
