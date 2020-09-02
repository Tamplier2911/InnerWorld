import { combineReducers } from 'redux';

// reducers
import popupReducer from './popup/popup.reducer.js';
import listReducer from './list/list.reducer.js';
import tableReducer from './table/table.reducer.js';

const rootReducer = combineReducers({
  popup: popupReducer,
  list: listReducer,
  table: tableReducer,
});

export default rootReducer;
