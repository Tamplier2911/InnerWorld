import authTypes from './auth.types';

const {
  SIGN_USER_UP_START,
  SIGN_USER_UP_SUCCESS,
  SIGN_USER_UP_FAILURE,
  LOG_USER_IN_START,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  LOG_USER_OUT_START,
  LOG_USER_OUT_SUCCESS,
  LOG_USER_OUT_FAILURE,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  REMOVE_USER_START,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
} = authTypes;

const INITIAL_STATE = {
  authObject: null,
  isLoading: false,
  isLogged: false,
  errorMessage: '',
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOG_USER_IN_START:
    case LOG_USER_OUT_START:
      return { ...state, isLoading: true };
    case LOG_USER_IN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: true,
        authObject: action.payload,
        errorMessage: '',
      };
    case LOG_USER_OUT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        authObject: null,
        errorMessage: '',
      };
    case LOG_USER_IN_FAILURE:
    case LOG_USER_OUT_FAILURE:
      return {
        ...state,
        isLoading: false,
        isLogged: false,
        authObject: null,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
