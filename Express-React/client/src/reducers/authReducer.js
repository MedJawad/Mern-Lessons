import { authActionTypes } from "../actions/actionTypes";

const INITIAL_STATE = {
  isLoading: false,
  error: null,
  token: null,
  username: null,
};

export const auth = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case authActionTypes.request:
      return {
        isLoading: true,
        error: null,
        token: null,
        username: null,
      };
    case authActionTypes.receive:
      return {
        isLoading: false,
        error: null,
        token: action.data.token,
        username: action.data.username,
      };
    case authActionTypes.failure:
      return {
        error: action.error,
        isLoading: false,
        token: null,
        username: null,
      };
    case authActionTypes.logout:
      return {
        isLoading: false,
        error: null,
        token: null,
        username: null,
      };
    default:
      return state;
  }
};
