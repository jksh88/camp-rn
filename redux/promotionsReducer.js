import * as ActionTypes from './ActionTypes';

export const promotionsReducer = (
  state = {
    isLoading: true,
    promotions: [],
    errMsg: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_PROMOTIONS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        promotions: action.payload,
      };
    case ActionTypes.PROMOTIONS_LOADING:
      return { ...state, isLoading: true, errMsg: null };
    case ActionTypes.PROMOTIONS_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
    default:
      return state;
  }
};
