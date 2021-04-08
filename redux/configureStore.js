import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { campsitesReducer } from './campsitesReducer';
import { commentsReducer } from './commentsReducer';
import { promotionsReducer } from './promotionsReducer';
import { partnersReducer } from './partnersReducer';
import { favoritesReducer } from './favortiesReducer';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      campsites: campsitesReducer,
      comments: commentsReducer,
      promotions: promotionsReducer,
      partners: partnersReducer,
      favorites: favoritesReducer,
    }), //the keys here are the pieces of the state that selectors will need to have access to to grab that piece of state from the store
    applyMiddleware(thunk, logger)
  );
  return store;
};

//https://redux.js.org/recipes/structuring-reducers/using-combinereducers
