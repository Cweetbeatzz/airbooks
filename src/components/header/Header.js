import React, {useState} from "react";
import { ReactDOM } from "react";
import {Wrapper, Content, Logo} from './Header.styles';
import styled from 'styled-components';
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

// #####################################################################

const Container = styled.div`
min-height:60px;
position:fixed;
display:flex;
align-items:center;
justify-content:space-between;
padding: 0 50px;
top:0;
left:0;
right:0;
flex:1;
z-index:1;
a{
    font-weight:600;
    text-transform:uppercase;
    color:white;
    letter-spacing:1.24px;
}
`
// #####################################################################

const Menu = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
justify-content:center;
padding: 0 10px;
color:white;

@media(max-width:768px)
{
    display:none;
}

a{
    font-weight:600;
    text-transform:uppercase;
    padding: 0 10px;
    flex-wrap:nowrap;
    color:white;
}

`
// #####################################################################

const RightMenu = styled.div`


`
// #####################################################################
const CustomMenu = styled.div`


`
// #####################################################################
const BurgerNav = styled.div`
background:grey;
position:fixed;
top:0;
bottom:0;
right:0;
width:200px;
list-style:none;
z-index: 100;
padding:20px;
// opacity:0.5;
a{
    font-weight:600;
    text-transform:uppercase;
    color:black;
}
li
{
    padding:10px 0;
    border-bottom: 1px solid rgba(0,0,0,.2);
}

`
// #####################################################################