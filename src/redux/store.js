import { createStore, applyMiddleware } from 'redux';

// middlewares
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// root reducer
import rootReducer from './root.reducer';

const middlewares = [thunk];

if (process.env.NODE_ENV === 'development') middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
