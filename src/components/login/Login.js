import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/actions/userActions";
import Message from "../products/Message";
import { useLocation } from "react-router-dom";
import { createBrowserHistory } from "history";
import {
  Grid,
  Typography,
  TextField,
  List,
  ListItem,
  Button,
} from "@material-ui/core";
import { useForm } from "react-hook-form";

function Login(props) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm({
    mode: "onTouched",
    reValidateMode: "onBlur",
    criteriaMode: "firstError",
  });
  let location = useLocation();
  let history = createBrowserHistory();
  //########################################################

  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  //
  //########################################################

  const dispatch = useDispatch();
  //
  //########################################################

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    //calling the user login action
    dispatch(loginUserAction(getEmail, getPassword));
    //
    setEmail("");
    history.push("/home");
    // return <Redirect to="/home" />;
  };
  //
  //########################################################

  const signedIn = useSelector((state) => state.userLogin);
  const { error, userInfo } = signedIn;
  console.log(userInfo);
  const redirect = "/home";
  // const redirect = location.search ? location.search.split("=")[1] : "home";

  //########################################################
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);
  //########################################################
  return (
    <div>
      <br />
      <div className="container">
        <div className="text-center">
          <div className="text-center">
            <Typography className="text-primary" variant="h3">
              <strong>LOGIN</strong>
            </Typography>
          </div>

          <hr />
          <div className="row text-center p-3">
            <div className="col-md-6 mx-auto">
              <form
                asp-action="Login"
                method="post"
                onSubmit={handleLoginSubmit}
              >
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
                      className="form-control text-dark small"
                      // {...register("Email", {
                      //   required: "Email is required",
                      // pattern: {
                      //   value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      //   message: "Invalid Email Format",
                      // },
                      // })}
                      onChange={(event) => setEmail(event.target.value)}
                    />
                    {errors.Email && (
                      <span className="text-danger ">
                        <br />
                        {errors.Email?.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="Password"
                      placeholder="Password"
                      className="form-control text-dark"
                      // {...register("Password", {
                      //   required: "Password is required",
                      //   minLength: { value: 2 },
                      // })}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                    {errors.Password && (
                      <span className="text-danger ">
                        <br />
                        {errors.Password?.message}
                      </span>
                    )}
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
                  <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    className="btn btn-primary text-white"
                    id="login"
                    value="Login"
                  >
                    <strong>LOGIN</strong>
                  </Button>
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
