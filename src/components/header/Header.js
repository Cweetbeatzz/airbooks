import React, { useState } from "react";
import { ReactDOM } from "react";
import { Container } from "./Header.styles";
import { Link } from "react-router-dom";

function Header(params) {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-light border-bottom box-shadow">
        <div className="container">
          <Link className="navbar-brand" to="home">
            <img src="images/fashion5.png" alt="" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
            <ul className="navbar-nav flex-grow-1">
              <li className="nav-item">
                <Link className="nav-link text-dark" to="products">
                  <strong>STORE</strong>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link text-dark" to="login">
                  <strong>LOGIN</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="register">
                  <strong>REGISTER</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="contact">
                  <strong>CONTACT</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="about">
                  <strong>ABOUT US</strong>
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link text-dark" to="privacy">
                  <strong>PRIVACY</strong>
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link text-dark" to="admin">
                  <strong>ADMIN</strong>
                </Link>
              </li> */}
            </ul>
            <Link className="nav-link text-dark  m-0" to="cart">
              CART{" "}
              <span
                className="text-white bg-danger badge rounded-pill "
                id="cartquantity"
              >
                0
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg "
                width="18"
                height="18"
                fill="currentColor "
                className="bi bi-cart3 "
                viewBox="0 0 16 16 "
              >
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84
                           4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z "
                />
              </svg>
            </Link>

            {/* <Link className="nav-link text-dark m-0" to="account">
              {" "}
              ACCOUNT{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fill-rule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
            </Link> */}

            {/* <Link className="nav-link text-dark" to="logout">
              <strong>LOGOUT</strong>
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;