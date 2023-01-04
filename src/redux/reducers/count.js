// user imports
import {
	ADD_COUNT_LOADING,
	ADD_COUNT_SUCCESS,
	ADD_COUNT_ERROR,
} from '../types/count';

const initialState = {
	value: 0,
};

// reducers

/**
 * @function countReducer
 * @param {JSON} state
 * @param {Function} action
 * @returns {JSON}
 */
const countReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case ADD_COUNT_LOADING: {
			return {
				...state,
			};
		}
		case ADD_COUNT_SUCCESS: {
			return {
				value: state.value + 1,
			};
		}
		case ADD_COUNT_ERROR: {
			return {
				...state,
			};
		}
		default: {
			return { ...state };
		}
	}
};

// exports
export default countReducer;
