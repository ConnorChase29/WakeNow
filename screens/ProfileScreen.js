import React from 'react';

import { View, ScrollView, StyleSheet, Text, Image } from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

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
