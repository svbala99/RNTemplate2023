// library imports
import { all, put, takeLatest, call } from 'redux-saga/effects';

// actions
import { addCountSuccess, addCountError } from '../actions/count';

// types
import { ADD_COUNT_LOADING } from '../types/count';

function* incrementSaga() {
	try {
		yield put(addCountSuccess());
	} catch (_) {
		yield put(addCountError());
	}
}

function* workerSaga() {
	yield takeLatest(ADD_COUNT_LOADING, incrementSaga);
}

function* countSaga() {
	yield all([call(workerSaga)]);
}

// exports
export default countSaga;
