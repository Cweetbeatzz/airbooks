import React from "react";
import styled from "styled-components";

function Footer(params) {
  let today = new Date();
  return (
    <div>
      <footer className="border-top footer bg-default">
        <div className="container text-center text-black">
          &copy; FASHION5.COM - {today.getFullYear()}
        </div>
      </footer>
    </div>
  );
}

export default Footer;
