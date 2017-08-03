import React from 'react';

import {

  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,

} from 'react-native';

import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {

  render() {

    return (

      <View style= { styles.container } >

        <Text> WakeNow </Text>

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

  });