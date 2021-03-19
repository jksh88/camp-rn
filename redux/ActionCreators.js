import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

//thunked
export const fetchComments = () => (dispatch) => {
  return fetch(`${baseUrl}comments`)
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          const error = new Error(`Error ${res.status}: ${res.statusText}`);
          error.response = res; //Q: Why is this line necessary?
          throw error;
        }
      },
      (err) => {
        const errorMessage = new Error(err.message);
        throw errorMessage;
      }
    )
    .then((res) => res.json())
    .then((comments) => dispatch(addComments(comments)))
    .catch((err) => {
      console.log('ERR object:', err);
      dispatch(commentsFailed(err.message));
    });
};
//typically promise.then(successCallback, rejectCallback). Here if there was some kind of a response (even if it was not res.ok), it is considered a resolve or success.
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/reject

export const commentsFailed = (errMsg) => ({
  type: ActionTypes.COMMENTS_FAILED,
  payload: errMsg,
});

export const addComments = (comments) => ({
  type: ActionTypes.ADD_COMMENTS,
  payload: comments,
});

export const fetchCampsites = () => (dispatch) => {
  dispatch(campsitesLoading());
  return fetch(`${baseUrl}campsites`)
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          const error = new Error(`${res.status}: ${res.statusText}`);
          error.response = res;
          throw error;
        }
      },
      (err) => {
        const errorMessage = new Error(err.message);
        throw errorMessage;
      }
    )
    .then((res) => res.json())
    .then((campsites) => dispatch(addCampsites(campsites)))
    .catch((err) => dispatch(campsitesFailed(err.message)));
};

export const campsitesLoading = () => ({
  type: ActionTypes.CAMPSITES_LOADING,
});

export const campsitesFailed = (errMsg) => ({
  type: ActionTypes.CAMPSITES_FAILED,
  payload: errMsg,
});

export const addCampsites = (campsites) => ({
  type: ActionTypes.ADD_CAMPSITES,
  payload: campsites,
});

export const fetchPromotions = () => (dispatch) => {
  dispatch(promotionsLoading());
  return fetch(`${baseUrl}promotions`)
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          const error = new Error(`Error ${res.status}: ${res.statusText}`);
          error.response = res;
          throw error;
        }
      },
      (error) => {
        const errMsg = new Error(error.message);
        throw errMsg;
      }
    )
    .then((res) => res.json())
    .then((promotions) => dispatch(addPromotions(promotions)))
    .catch((err) => dispatch(promotionsFailed(err.message)));
};

export const promotionsLoading = () => ({
  type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = (errMsg) => ({
  type: ActionTypes.PROMOTIONS_FAILED,
  payload: errMsg,
});

export const addPromotions = (promotions) => ({
  type: ActionTypes.ADD_PROMOTIONS,
  payload: promotions,
});

export const fetchPartners = () => (dispatch) => {
  dispatch(partnersLoading());
  return fetch(`${baseUrl}partners`)
    .then(
      (res) => {
        if (res.ok) {
          return res;
        } else {
          console.log('RES INSIDE fetchPartners if res NOT OK: ', res);
          const error = new Error(`Error ${res.status}: ${res.statusText}`);
          error.response = res;
          throw error;
        }
      },
      (err) => {
        console.log('INSIDE fetchPartners reject callback');
        const errorMessage = new Error(err.message);
        throw errorMessage;
      }
    )
    .then((res) => res.json())
    .then((partners) => dispatch(addPartners(partners)))
    .catch((err) => dispatch(partnersFailed(err.message)));
};

export const partnersLoading = () => ({
  type: ActionTypes.PARTNERS_LOADING,
});

export const partnersFailed = (errMsg) => ({
  type: ActionTypes.PARTNERS_FAILED,
  payload: errMsg,
});

export const addPartners = (partners) => ({
  type: ActionTypes.ADD_PARTNERS,
  payload: partners,
});
