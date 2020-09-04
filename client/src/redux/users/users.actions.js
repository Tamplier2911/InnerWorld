import usersTypes from './users.types.js';
const {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  CREATE_USER_START,
  CREATE_USER_SUCCESS,
  CREATE_USER_FAILURE,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  REMOVE_USER_START,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
} = usersTypes;

// actions
import { openInfoBar } from '../infobar/infobar.actions.js';

export const fetchUsersStart = () => ({
  type: FETCH_USERS_START,
});

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (errorMessage) => ({
  type: FETCH_USERS_FAILURE,
  payload: errorMessage,
});

export const fetchAllUsers = () => async (dispatch) => {
  try {
    // spin loader
    dispatch(fetchUsersStart());

    // fetch users
    const res = await fetch('/api/v1/users', {
      method: 'GET',
    });

    // throw error if things go wrong
    if (!res.ok) throw new Error('Server respond with status FAIL.');

    // parse json
    const data = await res.json();

    // dispatch users to state
    dispatch(fetchUsersSuccess(data.data));

    // inform that users is loaded
    dispatch(
      openInfoBar({
        message: 'Users successfully fetched!',
        severity: 'success',
      })
    );
  } catch (err) {
    dispatch(fetchUsersFailure(err.message));
    // inform that error is occured
    dispatch(
      openInfoBar({
        message: err.message,
        severity: 'error',
      })
    );
  }
};

export const createUserStart = () => ({
  type: CREATE_USER_START,
});

export const createUserSuccess = (userObject) => ({
  type: CREATE_USER_SUCCESS,
  payload: userObject,
});

export const createUserFailure = (errorMessage) => ({
  type: CREATE_USER_FAILURE,
  payload: errorMessage,
});

export const createNewUser = (userObject) => async (dispatch) => {
  try {
    // spin loader
    dispatch(createUserStart());

    // post users
    const res = await fetch('/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userObject),
    });

    // throw error if things go wrong
    if (!res.ok) throw new Error('Server respond with status FAIL.');

    // parse json
    const data = await res.json();

    // dispatch users to state
    dispatch(createUserSuccess(data.data));

    // inform that users is loaded
    dispatch(
      openInfoBar({
        message: 'New user was successfully created!',
        severity: 'success',
      })
    );
  } catch (err) {
    dispatch(createUserFailure(err.message));
    // inform that error is occured
    dispatch(
      openInfoBar({
        message: err.message,
        severity: 'error',
      })
    );
  }
};

export const editUserStart = () => ({
  type: EDIT_USER_START,
});

export const editUserSuccess = (userObj) => ({
  type: EDIT_USER_SUCCESS,
  payload: userObj,
});

export const editUserFailure = (errorMessage) => ({
  type: EDIT_USER_FAILURE,
  payload: errorMessage,
});

export const updateUserData = (userObject) => async (dispatch) => {
  try {
    // spin loader
    dispatch(editUserStart());

    // patch users
    const res = await fetch(`/api/v1/users/${userObject._id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userObject),
    });

    // throw error if things go wrong
    if (!res.ok) throw new Error('Server respond with status FAIL.');

    // parse json
    const data = await res.json();

    // dispatch users to state
    dispatch(editUserSuccess(data.data));

    // inform that users is loaded
    dispatch(
      openInfoBar({
        message: 'User data was successfully updated!',
        severity: 'success',
      })
    );
  } catch (err) {
    dispatch(editUserFailure(err.message));
    // inform that error is occured
    dispatch(
      openInfoBar({
        message: err.message,
        severity: 'error',
      })
    );
  }
};

export const removeUserStart = () => ({
  type: REMOVE_USER_START,
});

export const removeUserSuccess = (userId) => ({
  type: REMOVE_USER_SUCCESS,
  payload: userId,
});

export const removeUserFailure = (errorMessage) => ({
  type: REMOVE_USER_FAILURE,
  payload: errorMessage,
});

export const removeUser = (userObject) => async (dispatch) => {
  try {
    // spin loader
    dispatch(removeUserStart());

    // patch users
    const res = await fetch(`/api/v1/users/${userObject._id}`, {
      method: 'DELETE',
    });

    // throw error if things go wrong
    if (!res.ok) throw new Error('Server respond with status FAIL.');

    // dispatch users to state
    dispatch(removeUserSuccess(userObject._id));

    // inform that users is loaded
    dispatch(
      openInfoBar({
        message: 'User data was successfully deleted!',
        severity: 'success',
      })
    );
  } catch (err) {
    dispatch(removeUserFailure(err.message));
    // inform that error is occured
    dispatch(
      openInfoBar({
        message: err.message,
        severity: 'error',
      })
    );
  }
};
