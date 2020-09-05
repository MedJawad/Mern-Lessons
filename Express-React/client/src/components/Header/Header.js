import React from "react";
import {
  HeaderContainer,
  HeaderBrand,
  HeaderLinks,
  HeaderLink,
} from "./Header.styles";
import { Link } from "react-router-dom";
import { logout } from "../../actions/authActions";
import { useDispatch } from "react-redux";
const Header = () => {
  const dispatch = useDispatch();
  return (
    <HeaderContainer>
      <HeaderBrand>MYREACTAPP</HeaderBrand>
      <HeaderLinks>
        <HeaderLink>
          <Link to="/">Home</Link>
        </HeaderLink>
        <HeaderLink>
          <Link to="/posts">Posts</Link>
        </HeaderLink>
        <HeaderLink>
          <Link to="/users">Users</Link>
        </HeaderLink>
        <HeaderLink>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </HeaderLink>
      </HeaderLinks>
    </HeaderContainer>
  );
};

export default Header;
