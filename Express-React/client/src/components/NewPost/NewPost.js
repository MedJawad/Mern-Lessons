import React, { useState } from "react";
import { NewPostContainer, Input, SubmitButton } from "./NewPost.styles.js";
const NewPost = () => {
  const [formData, setformData] = useState({
    title: "",
    description: "",
    authorId: "",
  });

  return (
    <NewPostContainer>
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
        value={formData.authorId}
        onChange={(e) =>
          setformData({
            ...formData,
            authorId: e.target.value,
          })
        }
      />
      <SubmitButton> Create Post </SubmitButton>
    </NewPostContainer>
  );
};

export default NewPost;
