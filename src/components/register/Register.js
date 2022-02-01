import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <br />
      <div class="container">
        <div class="text-center">
          <div class="text-center">
            <h1 class="text-primary">
              <strong>REGISTER</strong>
            </h1>
          </div>
          <hr />
          <div class="row text-center p-3">
            <div class="col-md-6 mx-auto">
              <form method="post" class="" action=".">
                <div class="form-group mb-3">
                  <input
                    type="text"
                    name="Firstname"
                    value=""
                    placeholder="Firstname"
                    asp-for="Firstname"
                    class="form-control"
                  />
                  <span
                    asp-validation-for="Firstname"
                    class="text-danger"
                  ></span>
                </div>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    name="Lastname"
                    value=""
                    placeholder="Lastname"
                    asp-for="Lastname"
                    class="form-control"
                  />
                  <span
                    asp-validation-for="Lastname"
                    class="text-danger"
                  ></span>
                </div>
                <div class="form-group mb-3">
                  <input
                    type="text"
                    name="Username"
                    value=""
                    placeholder="Username"
                    asp-for="Username"
                    class="form-control"
                  />
                  <span
                    asp-validation-for="Username"
                    class="text-danger"
                  ></span>
                </div>
                <div class="form-group row mb-3">
                  <div class="col-md-12">
                    <input
                      type="email"
                      name="email"
                      value=""
                      placeholder="Email"
                      asp-for="email"
                      class="form-control"
                    />
                    <span asp-validation-for="email" class="text-danger"></span>
                  </div>
                </div>
                <div class="form-group row mb-3">
                  <div class="col-md-12">
                    <input
                      type="text"
                      name="Address"
                      value=""
                      placeholder="Address"
                      asp-for="Address"
                      class="form-control"
                    />
                    <span
                      asp-validation-for="Address"
                      class="text-danger"
                    ></span>
                  </div>
                </div>
                <div class="form-group row mb-3">
                  <div class="col-md-12">
                    <input
                      type="text"
                      name="Phone"
                      value=""
                      placeholder="Phone"
                      asp-for="Phone"
                      class="form-control"
                    />
                    <span asp-validation-for="Phone" class="text-danger"></span>
                  </div>
                </div>
                <div class="form-group row mb-3">
                  <div class="col-md-12">
                    <input
                      type="text"
                      name="State"
                      value=""
                      placeholder="State"
                      asp-for="State"
                      class="form-control"
                    />
                    <span asp-validation-for="State" class="text-danger"></span>
                  </div>
                </div>
                <div class="form-group row mb-3">
                  <div class="col-md-12">
                    <input
                      type="text"
                      name="Country"
                      value=""
                      placeholder="Country"
                      asp-for="Country"
                      class="form-control"
                    />
                    <span
                      asp-validation-for="Country"
                      class="text-danger"
                    ></span>
                  </div>
                </div>
                <div class="form-group row mb-3">
                  <div class="col-md-12">
                    <input
                      type="text"
                      name="PostalCode"
                      value=""
                      placeholder="PostalCode"
                      asp-for="PostalCode"
                      class="form-control"
                    />
                    <span
                      asp-validation-for="PostalCode"
                      class="text-danger"
                    ></span>
                  </div>
                </div>

                <div class="form-group row mb-3">
                  <div class="col-md-12">
                    <input
                      type="password"
                      name="Password"
                      value=""
                      placeholder="Password"
                      asp-for="Password"
                      class="form-control"
                    />
                    <span
                      asp-validation-for="Password"
                      class="text-danger"
                    ></span>
                  </div>
                </div>
                <div class="form-group row mb-3">
                  <div class="col-md-12">
                    <input
                      type="password"
                      name="ConfirmPassword"
                      value=""
                      placeholder="Confirm Password"
                      asp-for="ConfirmPassword"
                      class="form-control"
                    />
                    <span
                      asp-validation-for="ConfirmPassword"
                      class="text-danger"
                    ></span>
                  </div>
                </div>
                <hr />
                <div class="form-group mt-2">
                  <div class="form-check d-flex">
                    <div class="text-center offset-3">
                      <input
                        asp-for="Agreement"
                        type="checkbox"
                        class="form-check-input bg-light"
                      />
                    </div>
                    <div>
                      <label asp-for="Agreement" class="form-check-label">
                        I accept the <a href="#">Terms of Use</a> and
                        <a href="#">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                </div>

                <hr class="" />
                <div class="form-group mt-2">
                  <button type="submit" value="Create" class="btn btn-primary">
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
