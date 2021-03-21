import axios from 'axios';
import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from "./types";
//import { returnErrors } from './errorActions.js'

//Check token and load user
export const loadUser = () => (dispatch, getState) => {
  //User loading
  dispatch({ type: USER_LOADING });

  axios
    .get('/api/auth/user', tokenConfig(getState))
    .then(res =>{
        dispatch({
          type: USER_LOADED,
          payload: res.data
        })
      }
    )
    .catch(err => {
      //dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR
      });
    });
}

// Register User
export const register = ({ name, email, password, admin }) => dispatch => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ name, email, password, admin });

  console.log(body);

  axios
    .post('/api/users', body, config)
    .then(res =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      // dispatch(
      //   //returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL')
      // );
      dispatch({
        type: REGISTER_FAIL
      });
    });
};

export const login = ({ email, password }) => dispatch => {

  console.log("in login");
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  // Request body
  const body = JSON.stringify({ email, password });

  console.log(body);
  axios
    .post('/api/auth', body, config)
    .then(res =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      })
    )
    .catch(err => {
      dispatch(
        //returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL')
      );
      dispatch({
        type: LOGIN_FAIL
      });
    });
}

export const logout = () => dispatch => {
  dispatch({
    type:LOGOUT_SUCCESS
  });
};

export const tokenConfig = getState => {
  //Get Token from local storage
  const token = getState().auth.token;

  //Headers
  const config = {
    headers: {
      "Content-type": "application/json",
    }
  }

  //If token then add to Headers
  if(token){
    config.headers['x-auth-token'] = token;
  }

  return config;
}
