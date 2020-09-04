import { combineReducers } from 'redux';

// reducers
import authReducer from './auth/auth.reducer.js';
import popupReducer from './popup/popup.reducer.js';
import listReducer from './list/list.reducer.js';
import tableReducer from './table/table.reducer.js';
import infobarReducer from './infobar/infobar.reducer.js';
import usersReducer from './users/users.reducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
  popup: popupReducer,
  infobar: infobarReducer,
  list: listReducer,
  table: tableReducer,
  users: usersReducer,
});

export default rootReducer;
