import { combineReducers } from 'redux';

// reducers
import dummyReducer from './src1/dummy.reducer';

const rootReducer = combineReducers({
  dummy: dummyReducer,
});

export default rootReducer;
