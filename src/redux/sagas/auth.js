// library imports
import { put, takeLatest, call } from 'redux-saga/effects';

// api
import loginApiService from '../../api';

// actions
import { loginSuccess, loginError } from '../actions/auth';

// types
import { LOGIN_LOADING } from '../types/auth';

function* loginSaga(action) {
	try {
		const loginResponse = yield call(loginApiService, action.payload);
		yield put(loginSuccess(loginResponse));
	} catch (error) {
		yield put(loginError());
	}
}

function* authSaga() {
	yield takeLatest(LOGIN_LOADING, loginSaga);
}

// exports
export default authSaga;
