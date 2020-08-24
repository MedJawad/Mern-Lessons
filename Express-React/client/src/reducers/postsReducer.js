const initial_state = {
    items: [
        { id: 1, title: "hello", description: "hello description" },
        { id: 2, title: "hello2", description: "hello description 2 " },
        { id: 3, title: "hello3", description: "hello description 3" },
    ],
    isLoading: false,
    error: null
};

export const posts = (state = initial_state, action) => {
    switch (action.type) {
        case "REQUEST_POSTS":
            return {
                items: [],
                isLoading: true,
                error: null
            };
        case "RECEIVE_POSTS":
            return {
                items: action.data,
                isLoading: false,
                error: null
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

}