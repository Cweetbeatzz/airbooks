
import React from 'react'
// import styled from 'styled-components';
import style from "./home.styles.css";
// #####################################################################

function Home() {
  return (
    <div className={style.container}>
   <div className={style.wrap}>
<div className={style.itemtext}>
  <h1>Welcome to AirBooks</h1>
  <p>Get instant access to Flights reservations,flight departures, time & Price Details...</p>
</div>

<div className={style.buttongroup}>
  <div className={style.leftbutton}>
      REGISTER
  </div>
  <div className={style.rightbutton}>
      LOGIN
  </div>

</div>
   </div>
 </div>
  )
}
// #####################################################################

export default Home
// #####################################################################

