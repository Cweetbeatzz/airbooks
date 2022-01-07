import styled from 'styled-components';

// #####################################################################

export const Container = styled.div`
min-height:60px;
position:fixed;
// background:rgba(59, 19, 241, 0.692);
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

export const Menu = styled.div`
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

export const RightMenu = styled.div`


`
// #####################################################################
export const CustomMenu = styled.div`


`
// #####################################################################
export const BurgerNav = styled.div`
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

