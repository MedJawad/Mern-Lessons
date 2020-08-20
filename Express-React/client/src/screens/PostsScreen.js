import React, { useState, useContext } from 'react';
import Post from '../components/Post/Post';
import PostsContext from '../contexts/PostsContext';
const PostsScreen = () => {
    const posts = useContext(PostsContext);
//SOLID PRINCIPLES
    return (
        <div>
            {
                posts.map((post,index)=><Post key={index} {...post} />)
            }
            {/* <PostsContext.Consumer>
                {
                    posts => <div>{posts.map((post,index)=><Post key={index} {...post} />)}</div>
                }
            </PostsContext.Consumer> */}
        </div>
    );
}

export default PostsScreen;
