import React, { Component } from 'react';

import {
	AppRegistry,
	View,
	StyleSheet,
	Text,
	StatusBar,
	TextInput,
	TouchableOpacity,
} from 'react-native';

//import { StackNavigator } from 'react-navigation';

//import HomeScreen from '../../screens/HomeScreen.js';

export default class LoginForm extends Component {
	render() {
		//const { navigate } = this.props.navigation;

		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />

				<TextInput
					placeholder="username or email"
					placeholderTextColor="rgba(255, 255, 255, 0.9)"
					returnKeyType="next"
					onSubmitEditing={() => this.passwordInput.focus()}
					keyboardType="email-address"
					autoCapitalize={'none'}
					autoCorrect={false}
					style={styles.input}
				/>

				<TextInput
					placeholder="password"
					placeholderTextColor="rgba(255, 255, 255, 0.9)"
					returnKeyType="go"
					secureTextEntry
					style={styles.input}
					ref={input => (this.passwordInput = input)}
				/>

				<TouchableOpacity
					style={styles.buttonContainer}
					onPress={() => navigate('Home')}
				>
					<Text style={styles.buttonText}>LOGIN</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
	},

	input: {
		height: 40,
		width: 300,
		backgroundColor: 'rgba(255, 255, 255, 0.2)',
		marginBottom: 10,
		color: '#FFF',
		paddingHorizontal: 10,
	},

	buttonContainer: {
		backgroundColor: '#2980b9',
		paddingVertical: 15,
	},

	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700',
	},
});
