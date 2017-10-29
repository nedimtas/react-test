import React, { Component } from 'react';
import {
	TextInput,
	StyleSheet,
	Alert
} from 'react-native';
import firebase from 'firebase';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged } from '../actions';
import { Button, Card, CardSection, Spinner } from '../component';

class LoginForm extends Component {
	state ={ email: '', password: '', loading: false };
	clickLogin() {
		this.setState({ loading: true });
		const { email, password } = this.state;

		if (email === '' || password === '') {
			this.setState({ loading: false });
			Alert.alert(
				'Mesaj',
				'Her iki alanda dolu olmalı!',
				[
					{ text: 'Tamam', onPress: () => null }
				]
			);
		} else {
			firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.loginSucces.bind(this))
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
				.then(this.loginSucces.bind(this))
				.catch(this.loginFail.bind(this));
			});
		}
	}

	loginSucces() {
		console.log('Başarılı');
		this.setState({ loading: false });
	}

	loginFail() {
		console.log('Hatalı');
		this.setState({ loading: false });
		Alert.alert(
			'Mesaj',
			'Kullanıcı adı veya şifreniz hatalı',
			[
				{ text: 'Tamam', onPress: () => null }
			]
		);
	}

	renderButton() {
		if (!this.state.loading) {
			return <Button onPress={this.clickLogin.bind(this)}> Giriş </Button>;
		}
		return <Spinner size="small" />;
	}

	render() {
		console.log('response email ' + this.props.email);
		console.log('response password ' + this.props.password);
		const {
			inputStyle
		} = styles;
		return (
			<Card>
				<CardSection>
					<TextInput
						placeholder="E-Mail"
						style={inputStyle}
						value={this.props.email}
						onChangeText={email => this.props.emailChanged(email)}
					/>
				</CardSection>

				<CardSection>
					<TextInput
						secureTextEntry
						placeholder="Şifre"
						style={inputStyle}
						value={this.props.password}
						onChangeText={password => this.props.passwordChanged(password)}
					/>
				</CardSection>

				<CardSection>
					{this.renderButton()}
				</CardSection>
			</Card>
		);
	}
}


const styles = StyleSheet.create({
	inputStyle: {
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		flex: 1
	},
});

const mapStateToProps = ({ kimlikdogrulamaResponse }) => {
	const { email, password } = kimlikdogrulamaResponse;
	return {
		email,
		password
	};
};

export default connect(mapStateToProps, { emailChanged, passwordChanged })(LoginForm);
