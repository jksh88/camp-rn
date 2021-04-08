import * as ActionTypes from './ActionTypes';

export const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FAVORITES:
      if (state.includes(action.payload)) {
        return state.filter((id) => id !== action.payload);
      }
      return [...state, action.payload];
    default:
      return state;
  }
};
