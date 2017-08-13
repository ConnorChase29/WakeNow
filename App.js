import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen.js';
import HomeScreen from './screens/HomeScreen.js';
import ProfileScreen from './screens/ProfileScreen.js';

const Navigation = StackNavigator({
  Login: { screen: LoginScreen },
  Home: { screen: HomeScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navigation />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3498db',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});
