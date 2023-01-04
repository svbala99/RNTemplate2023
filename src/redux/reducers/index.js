// library imports
import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';

// user imports
import authReducer from './auth';
import countReducer from './count';

// persist config - rehydrating the store
const userPersistConfig = {
	key: 'auth',
	storage: AsyncStorage,
};

const countPersistConfig = {
	key: 'count',
	storage: AsyncStorage,
};

const AppReducer = combineReducers({
	auth: persistReducer(userPersistConfig, authReducer),
	count: persistReducer(countPersistConfig, countReducer),
});

// exports
export default AppReducer;
