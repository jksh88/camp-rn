import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsitesReducer } from './campsitesReducer';
import { commentsReducer } from './commentsReducer';
import { promotionsReducer } from './promotionsReducer';
import { partnersReducer } from './partnersReducer';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsitesReducer,
      commentsReducer,
      promotionsReducer,
      partnersReducer,
    }),
    applyMiddleware(thunk, logger)
  );
  return store;
};
//https://redux.js.org/recipes/structuring-reducers/using-combinereducers
