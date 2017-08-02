import React from 'react';
import {

  StyleSheet,
  Text,
  View,
  Image,

} from 'react-native';

export default class LoginScreen extends React.Component {

  render() {

    return (

      <View style={ styles.container } >

        <Text style={ styles.loginScreenText } > Login Screen </Text>

        <Image source={ require ('../assets/wakenowwallpaper.png') }  style={ styles.backgroundImage } />

      </View>

    );

  }

}

const styles = StyleSheet.create({

  container: {

    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',

  },

  loginScreenText: {

    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 30,
    marginBottom: 20,
    backgroundColor: 'transparent',

  }

});