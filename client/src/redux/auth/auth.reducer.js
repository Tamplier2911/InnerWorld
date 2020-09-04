import authTypes from './auth.types';

const {
  LOG_USER_IN_START,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  LOG_USER_OUT_START,
  LOG_USER_OUT_SUCCESS,
  LOG_USER_OUT_FAILURE,
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
