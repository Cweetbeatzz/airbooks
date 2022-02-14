import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserAccountAction } from "../../redux/actions/userActions";

function Register() {
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
    }
  };
  //#################################################################

  // const redirect = props.location.search
  //   ? props.location.search.split("=")[1]
  //   : "login";

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
          <hr />
          <div className="row text-center p-3">
            <div className="col-md-6 mx-auto">
              <form method="post" className="form" onSubmit={handleSubmitForm}>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="Firstname"
                    required
                    placeholder="Firstname"
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                  />
                  <span
                    asp-validation-for="Firstname"
                    className="text-danger"
                  ></span>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="Lastname"
                    required
                    placeholder="Lastname"
                    onChange={(e) => setLastname(e.target.value)}
                    className="form-control"
                  />
                  <span
                    asp-validation-for="Lastname"
                    className="text-danger"
                  ></span>
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="Username"
                    required
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                  />
                  <span
                    asp-validation-for="Username"
                    className="text-danger"
                  ></span>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                    <span
                      asp-validation-for="email"
                      className="text-danger"
                    ></span>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="Address"
                      required
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    />
                    <span
                      asp-validation-for="Address"
                      className="text-danger"
                    ></span>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="number"
                      name="Phone"
                      required
                      placeholder="Phone"
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                    <span
                      asp-validation-for="Phone"
                      className="text-danger"
                    ></span>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="State"
                      required
                      placeholder="State"
                      onChange={(e) => setState(e.target.value)}
                      className="form-control"
                    />
                    <span
                      asp-validation-for="State"
                      className="text-danger"
                    ></span>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="Country"
                      required
                      placeholder="Country"
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    />
                    <span
                      asp-validation-for="Country"
                      className="text-danger"
                    ></span>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="number"
                      name="PostCode"
                      required
                      placeholder="PostalCode"
                      onChange={(e) => setPostCode(e.target.value)}
                      className="form-control"
                    />
                    <span
                      asp-validation-for="PostCode"
                      className="text-danger"
                    ></span>
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="Password"
                      required
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                    <span
                      asp-validation-for="Password"
                      className="text-danger"
                    ></span>
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="ConfirmPassword"
                      required
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                    />
                    <span
                      asp-validation-for="ConfirmPassword"
                      className="text-danger"
                    ></span>
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
                    value="Create"
                    className="btn btn-primary"
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
