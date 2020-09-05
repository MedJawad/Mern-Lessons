import axios from "axios";
import { authActionTypes } from "./actionTypes";
const requestAuth = () => ({
  type: authActionTypes.request,
});

const receiveAuth = (data) => ({
  type: authActionTypes.receive,
  data,
});

const failureAuth = (error) => {
  return {
    type: authActionTypes.failure,
    error,
  };
};
export const logout = () => ({ type: authActionTypes.logout });

// login
export const login = (formData) => {
  return (dispatch) => {
    dispatch(requestAuth());

    return axios
      .post("/api/login", {
        username: formData.username,
        password: formData.password,
      })
      .then((res) => dispatch(receiveAuth(res.data)))
      .catch((err) => dispatch(failureAuth(err)));
  };
};
