import React from 'react';

import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  StatusBar,
} from 'react-native';

import { StackNavigator, TabNavigator } from 'react-navigation';

import Clock from '../src/components/Clock.js';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#60bfff',
    },
    headerTintColor: 'white',
    gesturesEnabled: true,
  };
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <StatusBar barStyle="dark-content" />
          <Text style={styles.loginScreenText}>WakeNow</Text>
          <Image
            style={styles.profileImage}
            source={{ uri: 'http://unsplash.it/100/100' }}
          />

          <Text style={styles.profileImageText}>Welcome, User</Text>

          <Clock />
          <Text style={styles.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <TextInput
            placeholderTextColor="rgba(255, 255, 255, 0.9)"
            returnKeyType="go"
            onSubmitEditing={() => this.passwordInput.focus()}
            keyboardType="ascii-capable"
            autoCapitalize={'none'}
            autoCorrect={false}
            multiline={true}
            style={styles.input}
          />
          <Text style={styles.wordcount}>/50 characters</Text>
        </View>
      </ScrollView>
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

  loginScreenText: {
    fontSize: 40,
    paddingVertical: 50,
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

  profileImageText: {
    paddingTop: 10,
    paddingBottom: 30,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',
  },

  paragraph: {
    textAlign: 'center',
    marginTop: 20,
    backgroundColor: 'transparent',
    color: 'white',
  },
  input: {
    height: 75,
    width: 350,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    marginTop: 20,
    color: '#FFF',
  },
  wordcount: {
    paddingTop: 5,
    paddingBottom: 30,
    marginLeft: 250,
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: '#ecf0f1',
  },
});
