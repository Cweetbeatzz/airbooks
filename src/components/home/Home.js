
import React from 'react'
import styled from 'styled-components';
import style from '.home.styles.css';
// #####################################################################

function Home() {
  return (
    <Container>
   <Wrap>
<ItemText>
  <h1>Welcome to AirBooks</h1>
  <p>Get instant access to Flights reservations,flight departures, time & Price Details...</p>
</ItemText>

<ButtonGroup>
  <LeftButton>
      REGISTER
  </LeftButton>
  <RightButton>
      LOGIN
  </RightButton>

</ButtonGroup>
   </Wrap>
 </Container>
  )
}
// #####################################################################

export default Home
// #####################################################################

const Container = styled.div`

height:100vh;

`
// #####################################################################


const Wrap = styled.div`

width:100vw;
height:100vh;
background:black;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
// background-image: url('/images/maxresdefault.jpg');
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;



`
// #####################################################################

const ItemText = styled.div`
// background:green;
padding-top:15vh;
color:white;
text-align:center;


`
// #####################################################################

const ButtonGroup = styled.div`
display: flex;
margin-bottom:30px;
@media(max-width:768px)
{
    display:block;

}

`
// #####################################################################
const LeftButton = styled.div`
background:grey;
height:40px;
width:200px;
color:white;
font-weight:bold;
font-size:14px;
displap:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.8;
padding-top:10px;
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

const RightButton = styled.div`
background:white;
height:40px;
width:200px;
color:black;
font-weight:bold;
font-size:14px;
displap:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.3;
padding-top:10px;
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