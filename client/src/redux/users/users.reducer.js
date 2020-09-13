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

const INITIAL_STATE = {
  usersList: [],
  isLoading: false,
  errorMessage: '',
};

const updateRespectiveUserData = (usersList, updatedUserObject) => {
  return usersList.map((userObj) => {
    if (userObj._id === updatedUserObject._id) return updatedUserObject;
    return userObj;
  });
};

const filterRemoveUser = (usersList, userId) => {
  return usersList.filter((obj) => obj._id !== userId);
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_USERS_START:
    case CREATE_USER_START:
    case EDIT_USER_START:
    case REMOVE_USER_START:
      return { ...state, isLoading: true };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        usersList: action.payload,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        usersList: [action.payload, ...state.usersList],
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        usersList: updateRespectiveUserData(state.usersList, action.payload),
      };
    case REMOVE_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        errorMessage: '',
        usersList: filterRemoveUser(state.usersList, action.payload),
      };
    case FETCH_USERS_FAILURE:
    case CREATE_USER_FAILURE:
    case EDIT_USER_FAILURE:
    case REMOVE_USER_FAILURE:
      return { ...state, isLoading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default usersReducer;
