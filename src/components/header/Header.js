import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Header.styles.css";
import { loginOutUserAction } from "../../redux/actions/userActions";

function Header(params) {
  //
  // const cart = useSelector((state) => state.cart);
  // const { cartItems } = cart;

  //#######################################################################

  //if user is logged in render username
  const signedIn = useSelector((state) => state.userLogin);
  const { userInfo } = signedIn;

  //#######################################################################
  //logout
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(loginOutUserAction);
    const redirect = "";
  };

  //#######################################################################
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
                <Link
                  className="nav-link text-dark"
                  to="home"
                  id={styles.header}
                >
                  <strong>HOME</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="productstore"
                  id={styles.header}
                >
                  <strong>STORE</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="customer-care"
                  id={styles.header}
                >
                  <strong>CUSTOMER CARE</strong>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="contact"
                  id={styles.header}
                >
                  <strong>CONTACT</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="about"
                  id={styles.header}
                >
                  <strong>ABOUT US</strong>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="privacy"
                  id={styles.header}
                >
                  <strong>PRIVACY</strong>
                </Link>
              </li>
              {userInfo && userInfo.isAdmin ? (
                <li className="nav-item">
                  <Link
                    className="nav-link text-dark"
                    to="admin"
                    id={styles.header}
                  >
                    <strong>ADMIN</strong>
                  </Link>
                </li>
              ) : (
                ""
              )}

              {!userInfo ? (
                <div className="d-flex">
                  <li className="nav-item">
                    <Link
                      className="nav-link text-dark"
                      to="login"
                      id={styles.header}
                    >
                      <strong>LOGIN</strong>
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link text-dark"
                      to="register"
                      id={styles.header}
                    >
                      <strong>REGISTER</strong>
                    </Link>
                  </li>
                </div>
              ) : (
                <Link
                  className="nav-link text-dark m-0"
                  to="account"
                  id={styles.header}
                >
                  {" "}
                  ACCOUNT{" "}
                </Link>
              )}
              {/* <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="categories"
                  id={styles.header}
                >
                  <strong>CATEGORIES</strong>
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link
                  className="nav-link text-dark"
                  to="productlist"
                  id={styles.header}
                >
                  <strong>PRODUCTS</strong>
                </Link>
              </li> */}
            </ul>
            <Link className="nav-link text-dark  m-0" to="cart">
              CART{" "}
              <span
                className="text-white bg-danger badge rounded-pill "
                id={styles.cartquantity}
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

            {userInfo ? (
              <Link
                className="nav-link text-dark"
                to="logout"
                onClick={handleLogOut}
                id={styles.header}
              >
                <strong>LOGOUT</strong>
              </Link>
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
