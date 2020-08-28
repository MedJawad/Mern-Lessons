import axios from "axios";
import { postActionTypes } from "./actionTypes";
const requestPosts = () => ({
  type: postActionTypes.request,
});

const receivePosts = (data) => ({
  type: postActionTypes.receive,
  data,
});

const failurePosts = (error) => {
  return {
    type: postActionTypes.failure,
    error,
  };
};
// promise.then() <=> async await
// We re gonna dispatch fetchPosts
export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(requestPosts());
    return axios
      .get("/api/posts")
      .then((res) => dispatch(receivePosts(res.data)))
      .catch((err) => dispatch(failurePosts(err)));
  };
};

export const createPost = (post) => {
  return (dispatch) => {
    return axios
      .post("/api/posts", post)
      .then((res) => console.log(res))
      .then(() => dispatch(fetchPosts()))
      .catch((err) => console.log(err));
  };
};
