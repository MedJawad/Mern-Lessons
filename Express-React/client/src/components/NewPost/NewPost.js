import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { NewPostContainer, Input, SubmitButton } from "./NewPost.styles.js";
import { createPost } from "../../actions/postsActions";
const NewPost = () => {
  const dispatch = useDispatch();
  const INITIAL_STATE = {
    title: "",
    description: "",
    author: "",
  };
  const [formData, setformData] = useState(INITIAL_STATE);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(formData));
    setformData(INITIAL_STATE);
  };
  return (
    <NewPostContainer>
      <form onSubmit={handleSubmit}>
        <Input
          value={formData.title}
          onChange={(e) =>
            setformData({
              ...formData,
              title: e.target.value,
            })
          }
        />
        <Input
          value={formData.description}
          onChange={(e) =>
            setformData({
              ...formData,
              description: e.target.value,
            })
          }
        />
        <Input
          value={formData.author}
          onChange={(e) =>
            setformData({
              ...formData,
              author: e.target.value,
            })
          }
        />
        <SubmitButton> Create Post </SubmitButton>
      </form>
    </NewPostContainer>
  );
};

export default NewPost;
