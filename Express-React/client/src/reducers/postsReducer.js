import { postActionTypes } from "../actions/actionTypes";

const initial_state = {
  items: [],
  isLoading: false,
  error: null,
};

export const posts = (state = initial_state, action) => {
  switch (action.type) {
    case postActionTypes.request:
      return {
        items: [],
        isLoading: true,
        error: null,
      };
    case postActionTypes.receive:
      return {
        items: action.data,
        isLoading: false,
        error: null,
      };
    case postActionTypes.failure:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
