const initial_state = {
  items: [],
  isLoading: false,
  error: null,
};

export const posts = (state = initial_state, action) => {
  switch (action.type) {
    case "REQUEST_POSTS":
      return {
        items: [],
        isLoading: true,
        error: null,
      };
    case "RECEIVE_POSTS":
      return {
        items: action.data,
        isLoading: false,
        error: null,
      };
    case "FAILURE_POSTS":
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    default:
      return state;
  }
};
