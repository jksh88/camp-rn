import * as ActionTypes from './ActionTypes';

export const commentsReducer = (
  state = {
    comments: [],
    errMsg: null,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ADD_COMMENTS:
      return {
        ...state,
        errMsg: null,
        comments: action.payload,
      };
    case ActionTypes.COMMENTS_FAILED:
      return {
        ...state,
        errMsg: action.payload,
      };
    default:
      return state;
  }
};

//Q: Why is there no isLoading for comments?
