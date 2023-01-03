// library imports
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

// user imports
import userReducer from './user';

// persist config - rehydrating the store
const persistConfig = {
	key: 'root',
	storage: AsyncStorage,
};

const AppReducer = combineReducers({
	user: persistReducer(persistConfig, userReducer),
});

// exports
export default AppReducer;
