// library imports
import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';

// user imports
import MainNavigation from './navigation';
import store from './redux/store';

/**
 * @function App
 * @returns {JSX}
 * @description entire redux store is wrapped thru out the app, so that useSelector is available
 */
function App() {
	return (
		<Provider store={store}>
			<MainNavigation />
		</Provider>
	);
}

// exports
export default App;
