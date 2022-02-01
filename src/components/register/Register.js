import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Register() {
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
              <form method="post" className="" action=".">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="Firstname"
                    value=""
                    placeholder="Firstname"
                    asp-for="Firstname"
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
                    value=""
                    placeholder="Lastname"
                    asp-for="Lastname"
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
                    value=""
                    placeholder="Username"
                    asp-for="Username"
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
                      value=""
                      placeholder="Email"
                      asp-for="email"
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
                      value=""
                      placeholder="Address"
                      asp-for="Address"
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
                      type="text"
                      name="Phone"
                      value=""
                      placeholder="Phone"
                      asp-for="Phone"
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
                      value=""
                      placeholder="State"
                      asp-for="State"
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
                      value=""
                      placeholder="Country"
                      asp-for="Country"
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
                      type="text"
                      name="PostalCode"
                      value=""
                      placeholder="PostalCode"
                      asp-for="PostalCode"
                      className="form-control"
                    />
                    <span
                      asp-validation-for="PostalCode"
                      className="text-danger"
                    ></span>
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="Password"
                      value=""
                      placeholder="Password"
                      asp-for="Password"
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
                      value=""
                      placeholder="Confirm Password"
                      asp-for="ConfirmPassword"
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
                        I accept the <a href="#">Terms of Use</a> and
                        <a href="#">Privacy Policy</a>
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
