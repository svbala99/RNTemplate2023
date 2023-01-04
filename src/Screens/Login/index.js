// library imports
import React, { useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	StatusBar,
} from 'react-native';
import { useDispatch } from 'react-redux';

// user imports
import { loginRequest } from '../../redux/actions/auth';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	image: {
		marginBottom: 40,
	},

	inputView: {
		backgroundColor: '#FFC0CB',
		borderRadius: 30,
		width: '70%',
		height: 45,
		marginBottom: 20,
	},

	TextInput: {
		height: 50,
		flex: 1,
		padding: 10,
		marginLeft: 20,
		alignItems: 'flex-start',
	},

	forgot_button: {
		height: 30,
		marginBottom: 30,
	},

	loginBtn: {
		width: '80%',
		borderRadius: 25,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 40,
		backgroundColor: '#FF1493',
	},
});

/**
 * @function Login
 * @returns {JSX}
 */
function Login() {
	const dispatch = useDispatch();

	// local variables
	const [email, setEmail] = useState('Developer5@gmail.com');
	const [password, setPassword] = useState('123456');

	return (
		<View style={styles.container}>
			<StatusBar />
			<View style={styles.inputView}>
				<TextInput
					value={email}
					style={styles.TextInput}
					placeholder='Email'
					placeholderTextColor='#003f5c'
					onChangeText={(updatedEmail) => setEmail(updatedEmail)}
				/>
			</View>

			<View style={styles.inputView}>
				<TextInput
					value={password}
					style={styles.TextInput}
					placeholderTextColor='#003f5c'
					secureTextEntry
					onChangeText={(updatedPassword) => setPassword(updatedPassword)}
				/>
			</View>

			<TouchableOpacity>
				<Text style={styles.forgot_button}>Forgot Password?</Text>
			</TouchableOpacity>

			<TouchableOpacity
				onPress={() => dispatch(loginRequest({ email, password }))}
				style={styles.loginBtn}>
				<Text style={styles.loginText}>LOGIN</Text>
			</TouchableOpacity>
		</View>
	);
}

// exports
export default Login;
