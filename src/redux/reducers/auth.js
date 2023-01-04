// user imports
import {
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT,
} from '../types/auth';

const initialState = {
	loading: false,
	user: null,
};

// reducers

/**
 * @function authReducer
 * @param {JSON} state
 * @param {Function} action
 * @returns {JSON}
 */
const authReducer = (state = initialState, action = {}) => {
	switch (action.type) {
		case LOGIN_LOADING: {
			return {
				...state,
				loading: true,
			};
		}
		case LOGIN_SUCCESS: {
			return {
				...state,
				loading: false,
				user: action.response,
			};
		}
		case LOGIN_ERROR: {
			return {
				...state,
				loading: false,
				user: null,
			};
		}
		case LOGOUT: {
			return { ...initialState };
		}
		default: {
			return { ...state };
		}
	}
};

// exports
export default authReducer;
