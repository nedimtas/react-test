
import React from 'react';
import { 
	Text,
	Platform,
	StyleSheet,
	View
} from 'react-native';

const Header = (props) => {
	const { 
		textStyle, 
		viewStyle 
	} = styles;
	
	return (
		<View style={viewStyle}>
			<Text style={textStyle}> {props.headerText} </Text>
		</View>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 20,
		fontWeight: 'bold', 
		color: '#fff'
	},
	viewStyle: {
		height: 60,
		backgroundColor: '#2e3033',
		justifyContent: 'center',
		alignItems: 'center',
		...Platform.select({
			ios: {
				paddingTop: 25
			},
		}),
	}	
});

export default Header;
