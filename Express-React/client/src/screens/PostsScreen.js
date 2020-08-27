import React, { useEffect } from "react";
import Post from "../components/Post/Post";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions/postsActions";
import NewPost from "../components/NewPost/NewPost";
const PostsScreen = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.items);

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

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
