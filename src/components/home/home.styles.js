import styled from 'styled-components';


export const Container = styled.div`

height:100vh;

`
// #####################################################################


export const Wrap = styled.div`

width:100vw;
height:100vh;
background:black;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
// background-image: url('/images/PJ-BX983_MIDSEA_M_20141022104749.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;



`
// #####################################################################

export const ItemText = styled.div`
// background:green;
padding-top:15vh;
color:white;
text-align:center;


`
// #####################################################################

 export const ButtonGroup = styled.div`
display: flex;
margin-bottom:30px;
@media(max-width:768px)
{
    display:block;

}

`
// #####################################################################
export const LeftButton = styled.div`
background:grey;
height:40px;
width:200px;
color:white;
font-weight:bold;
font-size:14px;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.8;
margin-bottom:10px;
text-align:center;
cursor:pointer;
margin:0 3px;

@media(max-width:768px)
{
    margin-bottom:10px;

}
`
// #####################################################################

export const RightButton = styled.button`
background:white;
height:40px;
width:200px;
color:black;
font-weight:bold;
font-size:14px;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.3;
margin-bottom:10px;
text-align:center;
cursor:pointer;
margin:0 3px;

@media(max-width:768px)
{
    margin-bottom:10px;

}

`
// #####################################################################