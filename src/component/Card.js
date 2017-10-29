import React from 'react';
import {
	View,
	StyleSheet
} from 'react-native';

const Card = (props) => (
	<View style={styles.containerStyle}>
		{props.children}
	</View>
);

const styles = StyleSheet.create({
	containerStyle: {
		borderWidth: 1,
		borderRadius: 2,
		borderColor: '#ddd',
		borderBottomWidth: 0,
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowRadius: 2,
		elevation: 1,
		marginTop: 10,
		marginRight: 5,
		marginLeft: 5
	}
});

export { Card };
