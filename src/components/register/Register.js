import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserAccountAction } from "../../redux/actions/userActions";
import style from "./register.styles.css";

function Register(props) {
  let navigate = useNavigate();

  //#################################################################

  const [getFirstName, setFirstName] = useState("");
  const [getLastname, setLastname] = useState("");
  const [getUsername, setUsername] = useState("");
  const [getEmail, setEmail] = useState("");
  const [getAddress, setAddress] = useState("");
  const [getPhone, setPhone] = useState("");
  const [getState, setState] = useState("");
  const [getCountry, setCountry] = useState("");
  const [getPostCode, setPostCode] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getConfirmPassword, setConfirmPassword] = useState("");

  //#################################################################

  const dispatch = useDispatch();

  //#################################################################

  const navigateToLogin = () => {
    console.log("Navigate to login clicked");
    navigate("/login");
  };

  //#################################################################

  const handleSubmitForm = (e) => {
    //#######
    e.preventDefault();
    //#######
    if (getPassword !== getConfirmPassword) {
      alert("Passwords do not Match!!!");
    } else {
      //#######
      dispatch(
        createUserAccountAction(
          getFirstName,
          getLastname,
          getUsername,
          getEmail,
          getAddress,
          getPhone,
          getState,
          getCountry,
          getPostCode,
          getPassword
        )
      );
      navigateToLogin();
    }
  };

  //#################################################################

  return (
    <div>
      <br />
      <div className="container">
        <div className="text-center">
          <div className="text-center">
            <h1 className="text-primary">
              <strong>REGISTER</strong>
            </h1>
          </div>
          <div className="bg-light">
            <h4
              id={style.loginNavigate}
              className="p-2 text-primary"
              onClick={() => navigateToLogin()}
              style={{ cursor: "pointer" }}
            >
              <strong>Already have an account? Login</strong>
            </h4>
          </div>
          <hr />
          <div className="row text-center p-3">
            <div className="col-md-6 mx-auto">
              <form method="post" className="form" onSubmit={handleSubmitForm}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="Firstname"
                    placeholder="Firstname"
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                  />
                  {/* {errors.Firstname && (
                    <span className="text-danger ">
                      <br />
                      {errors.Firstname?.message}
                    </span>
                  )} */}
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="Lastname"
                    placeholder="Lastname"
                    onChange={(e) => setLastname(e.target.value)}
                    className="form-control"
                  />
                  {/* {errors.Lastname && (
                    <span className="text-danger ">
                      <br />
                      {errors.Lastname?.message}
                    </span>
                  )} */}
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="Username"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                  />
                  {/* {errors.Username && (
                    <span className="text-danger ">
                      <br />
                      {errors.Username?.message}
                    </span>
                  )} */}
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                    {/* {errors.Email && (
                      <span className="text-danger ">
                        <br />
                        {errors.Email?.message}
                      </span>
                    )} */}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="Address"
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    />
                    {/* {errors.Address && (
                      <span className="text-danger ">
                        <br />
                        {errors.Address?.message}
                      </span>
                    )} */}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="number"
                      name="Phone"
                      placeholder="Phone"
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                    {/* {errors.Phone && (
                      <span className="text-danger ">
                        <br />
                        {errors.Phone?.message}
                      </span>
                    )} */}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="State"
                      placeholder="State"
                      onChange={(e) => setState(e.target.value)}
                      className="form-control"
                    />
                    {/* {errors.State && (
                      <span className="text-danger ">
                        <br />
                        {errors.State?.message}
                      </span>
                    )} */}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="Country"
                      placeholder="Country"
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    />
                    {/* {errors.Country && (
                      <span className="text-danger ">
                        <br />
                        {errors.Country?.message}
                      </span>
                    )} */}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="number"
                      name="PostCode"
                      placeholder="PostalCode"
                      onChange={(e) => setPostCode(e.target.value)}
                      className="form-control"
                    />
                    {/* {errors.PostalCode && (
                      <span className="text-danger ">
                        <br />
                        {errors.PostalCode?.message}
                      </span>
                    )} */}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                    {/* {errors.Password && (
                      <span className="text-danger ">
                        <br />
                        {errors.Password?.message}
                      </span>
                    )} */}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="ConfirmPassword"
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                    />
                    {/* {errors.ConfirmPassword && (
                      <span className="text-danger ">
                        <br />
                        {errors.ConfirmPassword?.message}
                      </span>
                    )} */}
                  </div>
                </div>
                <hr />
                <div className="form-group mt-2">
                  <div className="form-check d-flex">
                    <div className="text-center offset-3">
                      <input
                        asp-for="Agreement"
                        type="checkbox"
                        className="form-check-input bg-light"
                      />
                    </div>
                    <div>
                      <label asp-for="Agreement" className="form-check-label">
                        I accept the <a href="link">Terms of Use</a> and
                        <a href="link">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                </div>
                <hr className="" />

                <div className="form-group mt-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    // onClick={() => {
                    //   handleSubmitForm();
                    // }}
                  >
                    <strong>SUBMIT</strong>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Register;
