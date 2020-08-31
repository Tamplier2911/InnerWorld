import listTypes from './list.types.js';
const { SET_LIST_ITEMS_CHECKED } = listTypes;

export const setListItemsChecked = (checkedIds) => ({
  type: SET_LIST_ITEMS_CHECKED,
  payload: checkedIds,
});
