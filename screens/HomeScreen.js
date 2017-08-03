import React from 'react';

import {

  StyleSheet,
  Text,
  View,
  Image,
  AppRegistry,

} from 'react-native';

//import { StackNavigator } from 'react-navigation';

export default class HomeScreen extends React.Component {

  render() {

    return (

      <View style= { styles.container } >

        <Text style= { styles.loginScreenText } >WakeNow</Text>

        <View style= { styles.hairline } />

        <Image style= { styles.profileImage } source= {{ uri: 'http://unsplash.it/100/100' }} />

        <Text style={ styles.profileImageText } >Welcome, User</Text>

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
    paddingVertical: 50,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',

  },

  hairline: {

    height: 1,
    alignSelf: 'stretch',
    alignItems: 'center',
    marginBottom: 50,
    backgroundColor: 'white',

  },

  profileImage: {

    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: 'grey',

  },

  profileImageText: {

    paddingTop: 10,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',

  },

  });