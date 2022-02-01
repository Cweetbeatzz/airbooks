import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <br />
      <div className="container">
        <div className="text-center">
          <div className="text-center">
            <h1 className="text-primary">
              <strong>LOGIN</strong>
            </h1>
          </div>

          <hr />
          <div className="row text-center p-3">
            <div className="col-md-6 mx-auto">
              <form asp-action="Login" method="post">
                <div
                  asp-validation-summary="ModelOnly"
                  className="text-danger"
                ></div>

                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      asp-for="Email"
                      className="form-control text-dark"
                    />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                      asp-for="Password"
                      className="form-control text-dark"
                    />
                  </div>
                </div>
                <br />
                <hr />
                <div className="form-group mt-2">
                  <div className="form-check d-flex">
                    <div className="text-center offset-lg-5">
                      <input
                        type="checkbox"
                        className="form-check-input bg-light"
                      />
                    </div>
                    <div>
                      <label className="form-check-label">Remember Me</label>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="col-md-4 mx-auto">
                  <button
                    type="submit"
                    className="btn btn-primary text-white"
                    id="login"
                    value="Login"
                  >
                    <strong>LOGIN</strong>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>
    </Container>
  );
}

export default Login;

const Container = styled.div``;
