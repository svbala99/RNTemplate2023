// library imports
import 'react-native-gesture-handler';
import React from 'react';
import { Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// user imports
import MainNavigation from './navigation';
import store, { persistor } from './redux/store';

/**
 * @function App
 * @returns {JSX}
 * @description entire redux store is wrapped thru out the app, so that useSelector is available
 */
function App() {
	return (
		<Provider store={store}>
			<PersistGate
				loading={
					<View
						style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
						<Text>Persisting data...</Text>
					</View>
				}
				persistor={persistor}>
				<MainNavigation />
			</PersistGate>
		</Provider>
	);
}

// exports
export default App;
