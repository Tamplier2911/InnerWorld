import listTypes from './list.types.js';
const { SET_LIST_ITEMS_CHECKED } = listTypes;

const initializeListItems = (n) =>
  Array.from(new Array(n), (el, i) => ({
    id: i + 1,
    content: `Text Content for - ${i + 1}`,
    checked: Math.random() > 0.5 ? true : false,
  }));

const filterChecked = (currentList, arrayOfCheckedIds) => {
  return currentList.map((obj) => {
    if (arrayOfCheckedIds.includes(obj.id)) {
      obj.checked = true;
      return obj;
    }
    return obj;
  });
};

const INITIAL_STATE = {
  listItems: initializeListItems(50),
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_LIST_ITEMS_CHECKED:
      return {
        ...state,
        listItems: filterChecked(state.listItems, action.payload),
      };
    default:
      return state;
  }
};

export default listReducer;
