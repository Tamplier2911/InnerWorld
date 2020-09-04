import listTypes from './list.types.js';
const { TOGGLE_SINGLE_LIST_CHECK, TOGGLE_ALL_LIST_CHECK } = listTypes;

const initializeListItems = (n) =>
  Array.from(new Array(n), (el, i) => ({
    id: i + 1,
    content: `Text Content for - ${i + 1}`,
    // checked: Math.random() > 0.5 ? true : false,
    checked: false,
  }));

const toggleSingleCheck = (initialList, id) => {
  return initialList.map((obj) => {
    if (obj.id === id) {
      obj.checked = !obj.checked;
      return obj;
    }
    return obj;
  });
};

const toggleAllCheck = ({ listItems, allChecked }) => {
  return listItems.map((obj) => {
    obj.checked = allChecked ? false : true;
    return obj;
  });
};

const INITIAL_STATE = {
  listItems: initializeListItems(50),
  allChecked: false,
};

const listReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SINGLE_LIST_CHECK:
      return {
        ...state,
        listItems: toggleSingleCheck(state.listItems, action.payload),
      };
    case TOGGLE_ALL_LIST_CHECK:
      return {
        ...state,
        allChecked: !state.allChecked,
        listItems: toggleAllCheck(state),
      };
    default:
      return state;
  }
};

export default listReducer;
