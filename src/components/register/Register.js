import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createUserAccountAction } from "../../redux/actions/userActions";
import { useForm } from "react-hook-form";

function Register(props) {
  //#################################################################
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

  const handleSubmitForm = (e, history) => {
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
      //resets the form after sucessfull submit
      reset();

      // history.push("/login");
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
              <form
                method="post"
                className="form"
                onSubmit={handleSubmit(handleSubmitForm)}
              >
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="Firstname"
                    {...register("Firstname", {
                      required: "Firstname is required",
                      minLength: { value: 2 },
                    })}
                    placeholder="Firstname"
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                  />
                  {errors.Firstname && (
                    <span className="text-danger ">
                      <br />
                      {errors.Firstname?.message}
                    </span>
                  )}
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="Lastname"
                    {...register("Lastname", {
                      required: "Lastname is required",
                      minLength: { value: 2 },
                    })}
                    placeholder="Lastname"
                    onChange={(e) => setLastname(e.target.value)}
                    className="form-control"
                  />
                  {errors.Lastname && (
                    <span className="text-danger ">
                      <br />
                      {errors.Lastname?.message}
                    </span>
                  )}
                </div>
                <div className="form-group mb-3">
                  <input
                    type="text"
                    name="Username"
                    {...register("Username", {
                      required: "Username is required",
                      minLength: { value: 2 },
                    })}
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    className="form-control"
                  />
                  {errors.Username && (
                    <span className="text-danger ">
                      <br />
                      {errors.Username?.message}
                    </span>
                  )}
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="email"
                      name="Email"
                      {...register("Email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                          message: "Invalid Email Format",
                        },
                      })}
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control"
                    />
                    {errors.Email && (
                      <span className="text-danger ">
                        <br />
                        {errors.Email?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="Address"
                      {...register("Address", {
                        required: "Address is required",
                        minLength: { value: 2 },
                      })}
                      placeholder="Address"
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control"
                    />
                    {errors.Address && (
                      <span className="text-danger ">
                        <br />
                        {errors.Address?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="number"
                      name="Phone"
                      {...register("Phone", {
                        required: "Phone is required",
                        pattern: {
                          value:
                            /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,9}$/,
                          message: "Invalid Phone Format",
                        },
                      })}
                      placeholder="Phone"
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control"
                    />
                    {errors.Phone && (
                      <span className="text-danger ">
                        <br />
                        {errors.Phone?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="State"
                      {...register("State", {
                        required: "State is required",
                        minLength: { value: 2 },
                      })}
                      placeholder="State"
                      onChange={(e) => setState(e.target.value)}
                      className="form-control"
                    />
                    {errors.State && (
                      <span className="text-danger ">
                        <br />
                        {errors.State?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="text"
                      name="Country"
                      {...register("Country", {
                        required: "Country is required",
                        minLength: { value: 2 },
                      })}
                      placeholder="Country"
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control"
                    />
                    {errors.Country && (
                      <span className="text-danger ">
                        <br />
                        {errors.Country?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="number"
                      name="PostCode"
                      {...register("PostCode", {
                        required: "PostCode is required",
                        minLength: { value: 2 },
                      })}
                      placeholder="PostalCode"
                      onChange={(e) => setPostCode(e.target.value)}
                      className="form-control"
                    />
                    {errors.PostalCode && (
                      <span className="text-danger ">
                        <br />
                        {errors.PostalCode?.message}
                      </span>
                    )}
                  </div>
                </div>

                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="Password"
                      {...register("Password", {
                        required: "Password is required",
                        minLength: { value: 2 },
                      })}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      className="form-control"
                    />
                    {errors.Password && (
                      <span className="text-danger ">
                        <br />
                        {errors.Password?.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="form-group row mb-3">
                  <div className="col-md-12">
                    <input
                      type="password"
                      name="ConfirmPassword"
                      {...register("ConfirmPassword", {
                        required: "ConfirmPassword is required",
                        minLength: { value: 2 },
                      })}
                      placeholder="Confirm Password"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="form-control"
                    />
                    {errors.ConfirmPassword && (
                      <span className="text-danger ">
                        <br />
                        {errors.ConfirmPassword?.message}
                      </span>
                    )}
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
