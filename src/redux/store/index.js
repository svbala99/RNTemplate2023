// library imports
import {
	legacy_createStore as createStore,
	applyMiddleware,
	compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

// Imports: Redux Root Reducer
import rootReducer from '../reducers';

// Imports: Redux Root Saga
import rootSaga from '../sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	rootReducer,
	composeEnhancers(applyMiddleware(...middleware)),
);
sagaMiddleware.run(rootSaga);

// Exports
export default store;
