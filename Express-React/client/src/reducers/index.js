import { combineReducers } from "redux";
import { posts } from "./postsReducer";
import { auth } from "./authReducer";
const RootReducer = combineReducers({
  posts,
  auth,
});

export default RootReducer;
