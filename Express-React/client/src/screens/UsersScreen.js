import React, { useContext } from 'react';
import PostsContext from '../contexts/PostsContext';
import { useSelector } from 'react-redux';
const UsersScreen = () => {
    // const posts = useContext(PostsContext);
    const posts = useSelector(state => state.posts.items);

    return (
        <div>
            <div>{posts.length}</div>
        </div>
    );
}

export default UsersScreen;
