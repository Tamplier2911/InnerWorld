import { combineReducers } from 'redux';

// reducers
import authReducer from './auth/auth.reducer.js';
import popupReducer from './popup/popup.reducer.js';
import listReducer from './list/list.reducer.js';
import tableReducer from './table/table.reducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
  popup: popupReducer,
  list: listReducer,
  table: tableReducer,
});

export default rootReducer;
