// library imports
import {
	legacy_createStore as createStore,
	applyMiddleware,
	compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

// Imports: Redux Root Reducer
import rootReducer from '../reducers';

// Imports: Redux Root Saga
import rootSaga from '../sagas/rootSaga';

import Reactotron from '../../../config/reactotron';

const sagaMonitor = Reactotron.createSagaMonitor();
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const middleware = applyMiddleware(sagaMiddleware);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(
// 	rootReducer,
// 	composeEnhancers(applyMiddleware(...middleware)),
// );
// sagaMiddleware.run(rootSaga);

const store = createStore(
	rootReducer,
	compose(middleware, Reactotron.createEnhancer()),
);
sagaMiddleware.run(rootSaga);

// Exports
export const persistor = persistStore(store);
export default store;
