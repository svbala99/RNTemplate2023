// library imports
import { all, call } from 'redux-saga/effects';

// user imports
import authSaga from './auth';
import countSaga from './count';

/**
 * @function rootSaga
 * @generator
 * @description top level saga - MASTER
 */
function* rootSaga() {
	yield all([call(authSaga), call(countSaga)]);
}

// exports
export default rootSaga;
