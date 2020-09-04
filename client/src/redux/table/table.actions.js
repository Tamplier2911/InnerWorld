import tableTypes from './table.types';
const { TOGGLE_ALL_TABLE_CHECK, TOGGLE_SINGLE_TABLE_CHECK } = tableTypes;

export const toggleAllTableCheck = () => ({
  type: TOGGLE_ALL_TABLE_CHECK,
});

export const toggleSingleTableCheck = (id) => ({
  type: TOGGLE_SINGLE_TABLE_CHECK,
  payload: id,
});
