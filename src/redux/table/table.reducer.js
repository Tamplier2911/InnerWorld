import tableTypes from './table.types';
const { TOGGLE_ALL_TABLE_CHECK, TOGGLE_SINGLE_TABLE_CHECK } = tableTypes;

const initializeTableData = (n) => {
  return Array.from(new Array(n), (el, i) => ({
    id: i + 1,
    content: `Text content for ${i + 1}`,
    checked: false,
  }));
};

const toggleSingleCheck = (initialData, id) => {
  return initialData.map((obj) => {
    if (obj.id === id) {
      obj.checked = !obj.checked;
      return obj;
    }
    return obj;
  });
};

const toggleAllCheck = ({ tableData, allChecked }) => {
  return tableData.map((obj) => {
    obj.checked = allChecked ? false : true;
    return obj;
  });
};

const INITIAL_STATE = {
  tableData: initializeTableData(20000),
  allChecked: false,
};

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_SINGLE_TABLE_CHECK:
      return {
        ...state,
        tableData: toggleSingleCheck(state.tableData, action.payload),
      };
    case TOGGLE_ALL_TABLE_CHECK:
      return {
        ...state,
        allChecked: !state.allChecked,
        tableData: toggleAllCheck(state),
      };
    default:
      return state;
  }
};

export default tableReducer;
