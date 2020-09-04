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

const INITIAL_STATE = {
  usersList: [
    {
      id: 'randusemary123',
      firstName: 'Mary',
      lastName: 'Jane',
      phone: ['+380931222234', '+380991234321'],
      email: ['mary@very.com', 'jane@pain.com'],
    },
    {
      id: 'randuserozy123',
      firstName: 'Rousy',
      lastName: 'James',
      phone: ['+380931222234', '+380991234321'],
      email: ['rousy@rose.com'],
    },
    {
      id: 'randusekim123',
      firstName: 'Kim',
      lastName: 'Jong',
      phone: ['+380991234321'],
      email: ['kim@beam.com', 'jong@gong.com'],
    },
    {
      id: 'randusetom123',
      firstName: 'Tommy',
      lastName: 'Lee',
      phone: ['+380931222234'],
      email: ['tom@dom.com'],
    },
    {
      id: 'randuserod123',
      firstName: 'Rodrigue',
      lastName: 'Morales',
      phone: [],
      email: [],
    },
  ],
  isLoading: false,
  errorMessage: "'",
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
