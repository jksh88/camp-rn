import * as ActionTypes from './ActionTypes';

export const partnersReducer = (
  state = { isLoading: true, errMsg: null, partners: [] },
  action
) => {
  switch (action.type) {
    case ActionTypes.PARTNERS_LOADING:
      return { ...state, isLoading: true, errMsg: null, partners: [] };
    case ActionTypes.ADD_PARTNERS:
      return {
        ...state,
        isLoading: false,
        errMsg: null,
        partners: action.payload,
      };
    case ActionTypes.PARTNERS_FAILED:
      return { ...state, isLoading: false, errMsg: action.payload };
  }
};

//Q: Why is the below not this? Because you don't want to replace the state completely with an empty array. Still want to keep what was in the state in there, although adding partners failed.
//    case ActionTypes.PARTNERS_FAILED:
// return {...state, isLoading: false, errMsg: action.payload, partners: []}
