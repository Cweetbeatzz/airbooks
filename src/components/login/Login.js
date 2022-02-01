import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <br />
      <div class="container">
        <div class="text-center">
          <div class="text-center">
            <h1 class="text-primary">
              <strong>LOGIN</strong>
            </h1>
          </div>

          <hr />
          <div class="row text-center p-3">
            <div class="col-md-6 mx-auto">
              <form asp-action="Login" method="post">
                <div
                  asp-validation-summary="ModelOnly"
                  class="text-danger"
                ></div>

                <div class="form-group row mb-3">
                  <div class="col-md-12">
                    <input
                      type="email"
                      name="Email"
                      placeholder="Email"
                      asp-for="Email"
                      class="form-control text-dark"
                    />
                  </div>
                </div>

                <div class="form-group row">
                  <div class="col-md-12">
                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                      asp-for="Password"
                      class="form-control text-dark"
                    />
                  </div>
                </div>
                <br />
                <hr />
                <div class="form-group mt-2">
                  <div class="form-check d-flex">
                    <div class="text-center offset-lg-5">
                      <input
                        type="checkbox"
                        class="form-check-input bg-light"
                      />
                    </div>
                    <div>
                      <label class="form-check-label">Remember Me</label>
                    </div>
                  </div>
                </div>

                <hr />
                <div class="col-md-4 mx-auto">
                  <button
                    type="submit"
                    class="btn btn-primary text-white"
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
