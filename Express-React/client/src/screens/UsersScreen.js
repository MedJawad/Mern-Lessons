import React, { useContext } from 'react';
import PostsContext from '../contexts/PostsContext';
const UsersScreen = () => {
    const posts = useContext(PostsContext);
    return (
        <div>
            {
                <div>{posts.length}</div>
            }
            {/* <PostsContext.Consumer>
                {
                    posts => <div>{posts.length}</div>
                }
            </PostsContext.Consumer> */}
        </div>
    );
}

export default UsersScreen;
