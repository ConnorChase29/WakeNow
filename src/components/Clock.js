import React, { Component } from 'react';

import { View, Text, StyleSheet, StatusBar } from 'react-native';

import moment from 'moment';

export default class Clock extends Component {
	constructor(props) {
		super(props);

		this.state = {
			time: moment().format('LTS'),

			date: moment().format('LL'),
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				time: moment().format('LTS'),

				date: moment().format('LL'),
			});
		}, 1000);
	}

	render() {
		return (
			<View style={styles.container}>
				<StatusBar barStyle="light-content" />

				<Text style={styles.timeText}>
					{this.state.time}
				</Text>

				<Text style={styles.dateText}>
					{this.state.date}
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'transparent',
		alignItems: 'center',
		paddingBottom: 5,
	},

	timeText: {
		color: 'white',
		fontSize: 50,
		backgroundColor: 'transparent',
	},

	dateText: {
		color: 'white',
		fontSize: 20,
		backgroundColor: 'transparent',
	},
});
