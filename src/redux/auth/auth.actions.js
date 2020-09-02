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
  } catch (err) {
    // or catch error
    dispatch(logUserInFailure(err.message));
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
