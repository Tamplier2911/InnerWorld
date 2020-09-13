import { combineReducers } from 'redux';

// reducers
import authReducer from './auth/auth.reducer.js';
import popupReducer from './popup/popup.reducer.js';
import listReducer from './list/list.reducer.js';
import tableReducer from './table/table.reducer.js';
import infobarReducer from './infobar/infobar.reducer.js';
import usersReducer from './users/users.reducer.js';

const rootReducer = combineReducers({
  auth: authReducer, // done
  popup: popupReducer, // done
  infobar: infobarReducer, // done
  list: listReducer, // done
  table: tableReducer, // done
  users: usersReducer, // done
});

export default rootReducer;
