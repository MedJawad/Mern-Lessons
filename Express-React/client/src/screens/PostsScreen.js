import React, { useState, useContext } from 'react';
import Post from '../components/Post/Post';
import {
    useSelector
} from 'react-redux';
const PostsScreen = () => {

    const posts = useSelector(state => state.posts.items);

    return (
        <div>
            {
                posts.map((post, index) => <Post key={index} {...post} />)
            }
        </div>
    );
}

export default PostsScreen;
