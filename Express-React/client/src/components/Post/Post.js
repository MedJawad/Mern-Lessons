import React from "react";
import {
  PostContainer,
  PostTitle,
  PostContent,
  PostHeader,
  PostInfos,
  PostUsername,
  PostTimestamp,
} from "./Post.styles";
const Post = ({ title, description, author, createdAt }) => {
  return (
    <PostContainer>
      <PostHeader>
        <PostTitle>{title}</PostTitle>
        <PostInfos>
          <PostUsername>Posted By: {author.username}, </PostUsername>
          <PostTimestamp>
            {createdAt ? createdAt.split("T")[0] : ""}
          </PostTimestamp>
        </PostInfos>
      </PostHeader>
      <PostContent>{description}</PostContent>
    </PostContainer>
  );
};

export default Post;
