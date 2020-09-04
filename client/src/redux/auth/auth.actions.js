import authTypes from './auth.types';

// actions
import { openInfoBar } from '../infobar/infobar.actions.js';

const {
  LOG_USER_IN_START,
  LOG_USER_IN_SUCCESS,
  LOG_USER_IN_FAILURE,
  LOG_USER_OUT_START,
  LOG_USER_OUT_SUCCESS,
  LOG_USER_OUT_FAILURE,
} = authTypes;

export const logUserInStart = () => ({
  type: LOG_USER_IN_START,
});

export const logUserInSuccess = (authObject) => ({
  type: LOG_USER_IN_SUCCESS,
  payload: authObject,
});

export const logUserInFailure = (errorMessage) => ({
  type: LOG_USER_IN_FAILURE,
  payload: errorMessage,
});

const getDataFromImaginaryServer = (userCredentials) => {
  const { email, password } = userCredentials;

  const adminEmail = 'admin@admin.net';
  const adminPassword = 'admin';

  if (email === adminEmail && password === adminPassword) {
    return {
      email: adminEmail,
      name: 'Admin',
      photo: 'https://picsum.photos/400/400',
    };
  }

  throw new Error(
    'There is no user with that email and password, please try again.'
  );
};

export const logUserInWithEmailAndPassword = (userCredentials) => async (
  dispatch
) => {
  try {
    // spin loader
    dispatch(logUserInStart());

    // data is loaded
    const res = getDataFromImaginaryServer(userCredentials);

    // return data
    dispatch(logUserInSuccess(res));

    // ensure user that he is logged in
    dispatch(
      openInfoBar({
        message: 'You successfully logged in!',
        severity: 'success',
      })
    );
  } catch (err) {
    // or catch error
    dispatch(logUserInFailure(err.message));
    // insure user that error is occured
    dispatch(
      openInfoBar({
        message: err.message,
        severity: 'error',
      })
    );
  }
};

export const logUserOutStart = () => ({
  type: LOG_USER_OUT_START,
});

export const logUserOutSuccess = () => ({
  type: LOG_USER_OUT_SUCCESS,
});

export const logUserOutFailure = (errorMessage) => ({
  type: LOG_USER_OUT_FAILURE,
  payload: errorMessage,
});

export const logUserOut = () => async (dispatch) => {
  try {
    // spin loader
    dispatch(logUserOutStart());

    // user is logged out
    dispatch(logUserOutSuccess(null));
  } catch (err) {
    // or catch error
    dispatch(logUserOutFailure(err.message));
  }
};
