const requestPosts = () => ({
    type: "REQUEST_POSTS"
});

const receivePosts = (data) => ({
    type: "RECEIVE_POSTS",
    data
});

const failurePosts = (error) => {
    return {
        type: "FAILURE_POSTS",
        error
    }
};