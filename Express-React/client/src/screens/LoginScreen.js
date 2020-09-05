import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/authActions";

const LoginScreen = () => {
  const dispatch = useDispatch();
  const [formData, setformData] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // use formdata to dispatch login action
    dispatch(login(formData));
  };

  return (
    <div>
      <h1>Please Login</h1>
      <form onSubmit={handleSubmit}>
        <h3>Username</h3>
        <input
          value={formData.username}
          onChange={(e) =>
            setformData({ ...formData, username: e.target.value })
          }
        />
        <h3>Password</h3>
        <input
          value={formData.password}
          onChange={(e) =>
            setformData({ ...formData, password: e.target.value })
          }
        />
        <button>Login</button>
      </form>
    </div>
  );
};

export default LoginScreen;
