import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction } from "../../redux/actions/userActions";
import Message from "../products/Message";
import { useNavigate } from "react-router-dom";
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
  //########################################################

  let navigate = useNavigate();

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
    const result = dispatch(loginUserAction(getEmail, getPassword));

    if (result) {
      setEmail("");
      //redirecting to home
      navigate("/home");
    }
  };
  //
  //########################################################

  const signedIn = useSelector((state) => state.userLogin);
  const { error, userInfo } = signedIn;
  
  console.log(userInfo);

  const navigateToRegister = () => {
    console.log("Navigate to Register clicked");
    navigate("/Register");
  };

  //########################################################
  useEffect(() => {}, [userInfo]);
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
          <div className="bg-light m-1">
            <h4
              className="p-2 text-primary"
              onClick={() => navigateToRegister()}
              style={{ cursor: "pointer" }}
            >
              <strong>Don't have an account? Register</strong>
            </h4>
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
