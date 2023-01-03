// library imports
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

// user imports
import { logout } from '../../redux/actions/user';

/**
 * @function Home
 * @returns {JSX}
 */
function Home() {
	const dispatch = useDispatch();
	return (
		<View
			style={{
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'white',
			}}>
			<Text style={{ color: 'black' }}>Home screen</Text>
			<Pressable
				onPress={() => dispatch(logout())}
				style={{ backgroundColor: 'lightpink', padding: 8, borderRadius: 8 }}>
				<Text>Logout</Text>
			</Pressable>
		</View>
	);
}

// exports
export default Home;
