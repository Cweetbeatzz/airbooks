import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/actions/userActions";
import Message from "../products/Message";

function Login(props) {
  //########################################################

  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  //
  //########################################################

  const dispatch = useDispatch();
  //
  //########################################################

  const handleSubmit = (e) => {
    e.preventDefault();
    //calling the user login action
    dispatch(loginUserAction(getEmail, getPassword));
  };
  //
  //########################################################

  const signedIn = useSelector((state) => state.userLogin);
  const { error, userInfo } = signedIn;
  console.log(userInfo);

  // const redirect = props.location.search
  //   ? props.location.search.split("=")[1]
  //   : "home";

  //########################################################
  // useEffect(() => {
  //   if (userInfo) {
  //     props.history.push(redirect);
  //   }
  // }, [props.history, redirect, userInfo]);
  //########################################################
  return (
    <div>
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
              <form asp-action="Login" method="post" onSubmit={handleSubmit}>
                {error ? <Message variant="danger">{error}</Message> : ""}
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
                      required
                      onChange={(e) => setEmail(e.target.value)}
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
                      required
                      onChange={(e) => setPassword(e.target.value)}
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
    </div>
  );
}

export default Login;
