// library imports
import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

// user imports
import { logout } from '../../redux/actions/auth';
import { addCountRequest } from '../../redux/actions/count';

/**
 * @function Home
 * @returns {JSX}
 */
function Home() {
	const dispatch = useDispatch();
	const countFromRedux = useSelector((state) => state.count.value);
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

			<View
				style={{
					flexDirection: 'row',
					padding: 32,
					width: '100%',
					justifyContent: 'space-around',
					alignItems: 'center',
				}}>
				<Pressable
					onPress={() => {
						dispatch(addCountRequest());
					}}
					style={{
						backgroundColor: 'lightblue',
						padding: 8,
						borderRadius: 32,
						width: 64,
						height: 64,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Text>+</Text>
				</Pressable>
				<Text style={{ color: 'black', fontWeight: 'bold', fontSize: 32 }}>
					{countFromRedux}
				</Text>
				<Pressable
					onPress={() => {}}
					style={{
						backgroundColor: 'lightblue',
						padding: 8,
						borderRadius: 32,
						width: 64,
						height: 64,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Text>-</Text>
				</Pressable>
			</View>
		</View>
	);
}

// exports
export default Home;
