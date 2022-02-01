import React, { useState } from "react";
import { ReactDOM } from "react";
import {
  Container,
  Menu,
  RightMenu,
  CustomMenu,
  BurgerNav,
} from "./Header.styles";
import { Link } from "react-router-dom";

// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';

function Header(params) {
  return (
    <Container>
      <Link to="Index">AIRBOOKS</Link>
      <Menu>
        <Link to="home">home</Link>
        <Link to="reservation">reservation</Link>
        <Link to="contact">contact</Link>
        <Link to="about">about</Link>
        <Link to="privacy">privacy</Link>
      </Menu>
      <RightMenu>
        <Link to="home">bookings</Link>
        <CustomMenu />
      </RightMenu>
      {/* <BurgerNav>
                    <li><a href="home">country</a></li>
                    <li><a href="home">depatures</a></li>
                    <li><a href="home">arrivals</a></li>
                    <li><a href="home">price feeds</a></li>
                    <li><a href="home">schedules</a></li>
                    <li><a href="home">location</a></li>
               </BurgerNav> */}
    </Container>
  );
}

export default Header;
