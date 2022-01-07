import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import {Container,Wrap,ItemText,ButtonGroup,LeftButton,RightButton} from "./home.styles"
// import {Container,Wrap,ItemText,ButtonGroup,LeftButton,RightButton} from "./home.styles.css"
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

