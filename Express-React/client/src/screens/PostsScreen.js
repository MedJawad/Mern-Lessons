import React, { useEffect } from "react";
import Post from "../components/Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
import NewPost from "../components/NewPost/NewPost";
import { PacmanLoader } from "react-spinners";
const PostsScreen = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);
  const isLoading = useSelector((state) => state.posts.isLoading);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  if (isLoading) {
    return (
      <div>
        <PacmanLoader size={30} margin={10} />
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div>
      <NewPost />

      {posts.map((post, index) => (
        <Post key={index} {...post} />
      ))}
    </div>
  );
};

export default PostsScreen;
