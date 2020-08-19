import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter
} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import HomeScreen from './screens/HomeScreen';
import PostsScreen from './screens/PostsScreen';
import UsersScreen from './screens/UsersScreen';

function App() {
  return (
    <BrowserRouter>
     <Header />
    <Switch>
      <Route path="/posts" component={PostsScreen} />
      <Route path="/users" component={UsersScreen} />
      <Route path="/" component={HomeScreen} />
    </Switch>
     
     {/* <Footer /> */}
     </BrowserRouter>
  );
}

export default App;
