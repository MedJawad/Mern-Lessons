import React, { useState } from 'react';
import Post from '../components/Post/Post';

const PostsScreen = () => {

    const [posts, setposts] = useState([
        {id:1,title:"hello",description:"hello description"},
        {id:2,title:"hello2",description:"hello description 2 "},
        {id:3,title:"hello3",description:"hello description 3"},
    ]);
//SOLID PRINCIPLES
    return (
        <div>
            {
                posts.map(post => <Post {...post} />)
            }
        </div>
    );
}

export default PostsScreen;
