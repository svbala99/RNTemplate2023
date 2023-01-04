// library imports
import React from 'react';
import { SafeAreaView } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';

// screens
import Home from '../Screens/Home';
import Login from '../Screens/Login';

// constants
import * as CONSTANTS from '../constants';

// object destructurings
const { HOME, LOGIN } = CONSTANTS.screenTitles;

const Stack = createStackNavigator();

function MainStack() {
	const isLoggedIn = useSelector((state) => state.auth?.user?.data?.Token);
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Stack.Navigator>
				{!isLoggedIn ? (
					//   Login screen
					<Stack.Screen
						name={LOGIN}
						component={Login}
						options={{
							headerShown: false,
						}}
					/>
				) : (
					//   Home screen
					<Stack.Screen
						name={HOME}
						component={Home}
						options={{
							headerShown: false,
						}}
					/>
				)}
			</Stack.Navigator>
		</SafeAreaView>
	);
}

// exports
export default MainStack;
