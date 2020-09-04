import usersTypes from './users.types.js';
const {
  FETCH_USERS_START,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  EDIT_USER_START,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAILURE,
  REMOVE_USER_START,
  REMOVE_USER_SUCCESS,
  REMOVE_USER_FAILURE,
} = usersTypes;

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
