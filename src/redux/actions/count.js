// user imports
import {
	ADD_COUNT_LOADING,
	ADD_COUNT_SUCCESS,
	ADD_COUNT_ERROR,
} from '../types/count';

// actions

const addCountRequest = () => ({ type: ADD_COUNT_LOADING });

const addCountSuccess = () => ({ type: ADD_COUNT_SUCCESS });

const addCountError = () => ({ type: ADD_COUNT_ERROR });

// exports
export { addCountRequest, addCountSuccess, addCountError };
