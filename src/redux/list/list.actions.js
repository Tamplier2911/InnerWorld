import listTypes from './list.types.js';
const { TOGGLE_SINGLE_LIST_CHECK, TOGGLE_ALL_LIST_CHECK } = listTypes;

export const toggleSingleListCheck = (id) => ({
  type: TOGGLE_SINGLE_LIST_CHECK,
  payload: id,
});

export const toggleAllListCheck = () => ({
  type: TOGGLE_ALL_LIST_CHECK,
});
