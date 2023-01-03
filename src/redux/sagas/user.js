// library imports
import { all, put, takeLatest, call } from 'redux-saga/effects';

// api
import { loginApiService } from '../../api';

// actions
import {
	loginSuccess,
	loginError,
} from '../actions/user';

// types
import { LOGIN_LOADING } from '../types/user';

function* loginSaga(action) {
	try {
		const loginResponse = yield call(loginApiService, action.payload);
		yield put(loginSuccess(loginResponse));
	} catch (error) {
		yield put(loginError());
	}
}
	
function* workerSaga() {
	yield takeLatest(LOGIN_LOADING, loginSaga);
}

function* userSagas() {
	yield all([call(workerSaga)]);
}

// exports
export default userSagas;
