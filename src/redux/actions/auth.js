// user imports
import {
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
	LOGOUT,
} from '../types/auth';

// actions

const loginRequest = (payload = {}) => ({ type: LOGIN_LOADING, payload });

const loginSuccess = (response = {}) => ({ type: LOGIN_SUCCESS, response });

const loginError = (error = {}) => ({ type: LOGIN_ERROR, error });

const logout = () => ({ type: LOGOUT });

// exports
export { loginRequest, loginSuccess, loginError, logout };
