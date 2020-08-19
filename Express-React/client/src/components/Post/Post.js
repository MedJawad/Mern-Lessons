import React from 'react';
import {PostContainer,PostTitle,PostContent} from './Post.styles';
const Post = ({title,description}) => {
    return (
        <PostContainer>
            <PostTitle>{title}</PostTitle>
            <PostContent>{description}</PostContent>
        </PostContainer>
    );
}

export default Post;
