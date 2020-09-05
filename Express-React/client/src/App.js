import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomeScreen from "./screens/HomeScreen";
import PostsScreen from "./screens/PostsScreen";
import UsersScreen from "./screens/UsersScreen";
import { Provider, useSelector } from "react-redux";
import { store } from "./store/store";
import LoginScreen from "./screens/LoginScreen";
function App() {
  //   const [posts, setposts] = useState([
  //     {id:1,title:"hello",description:"hello description"},
  //     {id:2,title:"hello2",description:"hello description 2 "},
  //     {id:3,title:"hello3",description:"hello description 3"},
  // ]);

  // useEffect(()=>{ // Componentdidmount
  //   setTimeout(()=>{
  //     // setposts([...posts,
  //     //   {id:4,title:"hello4",description:"hello description 4"},
  //     // ])
  //     const newPosts = posts.map(post => {
  //       if(post.id!==2) return post;
  //       return {id:4,title:"hello4",description:"hello description 4 "};
  //     });
  //     setposts(newPosts)
  //   },10000)
  // },[]);

  // useEffect(() => {
  //   console.log("I AM THE SECOND USEEFFECT");
  // },[posts]);

  const isAuthenticated = useSelector((state) => state.auth.token != null);

  return (
    <BrowserRouter>
      {isAuthenticated ? (
        <>
          <Header />
          <Switch>
            <Route path="/posts" component={PostsScreen} />
            <Route path="/users" component={UsersScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </>
      ) : (
        <>
          <Route component={LoginScreen} />
        </>
      )}
      {/* <Footer /> */}
    </BrowserRouter>
  );
}
const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);
export default ReduxApp;
