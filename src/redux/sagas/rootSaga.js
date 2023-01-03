// library imports
import { all, call } from 'redux-saga/effects';

// user imports
import userSagas from './user';

/**
 * @function rootSaga
 * @generator
 * @description top level saga - MASTER
 */
function* rootSaga() {
	yield all([call(userSagas)]);
}

// exports
export default rootSaga;
