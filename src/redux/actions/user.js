// user imports
import {
    LOGIN_LOADING,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    USER_FETCH_LOADING,
    USER_FETCH_SUCCESS,
    USER_FETCH_ERROR,
    LOGOUT
  } from '../types/user';

  // actions
  
  const loginRequest = (payload = {}) => ({type: LOGIN_LOADING, payload});
  
  const loginSuccess = (response = {}) => ({type: LOGIN_SUCCESS, response});
  
  const loginError = (error = {}) => ({type: LOGIN_ERROR, error});
  
  const fetchUser = (payload = {}) => ({
    type: USER_FETCH_LOADING,
    payload,
  });
  
  const fetchUserSuccess = (response = {}) => ({
    type: USER_FETCH_SUCCESS,
    response,
  });
  
  const fetchUserError = (error = {}) => ({type: USER_FETCH_ERROR, error});

  const logout = ()=>({type: LOGOUT})
  
  // exports
  export {
    loginRequest,
    loginSuccess,
    loginError,
    fetchUser,
    fetchUserSuccess,
    fetchUserError,
    logout
  };
  