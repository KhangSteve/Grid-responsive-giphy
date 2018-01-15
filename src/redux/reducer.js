/**
 * Created by Khang @Author on 15/01/17.
 */

const SET_LOGIN_PENDING = 'SET_LOGIN_PENDING';
const SET_LOGIN_SUCCESS = 'SET_LOGIN_SUCCESS';
const SET_LOGIN_ERROR = 'SET_LOGIN_ERROR';

const REQ_DATA = 'REQ_DATA';
const RECV_DATA = 'RECV_DATA';
const RECV_ERROR = 'RECV_ERROR';


export default function reducer(state = {
  isLoginSuccess: false,
  isLoginPending: false,
  loginError: null,
  data: [],
  isLoading: false,
  error: false
}, action) {
  switch (action.type) {
    case SET_LOGIN_PENDING:
      return Object.assign({}, state, {
        isLoginPending: action.isLoginPending
      });

    case SET_LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoginSuccess: action.isLoginSuccess
      });

    case SET_LOGIN_ERROR:
      return Object.assign({}, state, {
        loginError: action.loginError
      });
    case RECV_ERROR:
      return Object.assign({}, state,
        {
          isLoading: false, data: action.data, error: true
        });
    case RECV_DATA:
      return Object.assign({}, state,
        {
          isLoading: false, data: action.data, error: false
        });
    case REQ_DATA:
      return Object.assign({}, state,
        {
          isLoading: true, error: false
        });
    default:
      return state;
  }
} 