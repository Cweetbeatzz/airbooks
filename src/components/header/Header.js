import React, {useState} from "react";
import { ReactDOM } from "react";
import {Container, Menu, RightMenu,CustomMenu,BurgerNav} from './Header.styles';
// import MenuIcon from '@material-ui/icons/Menu';
// import CloseIcon from '@material-ui/icons/Close';


function Header(params) {
 return(
     <Container>
                <a href="Index">AIRBOOKS</a>
               <Menu>
                    <a href="home">home</a> 
                    <a href="reservation">reservation</a>
                    <a href="contact">contact</a>
                    <a href="about">about</a>
                    <a href="privacy">privacy</a>
               </Menu>
               <RightMenu>
                    <a href="home">bookings</a> 
                    <CustomMenu/>
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
)
}

export default Header

