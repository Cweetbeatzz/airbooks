import React from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";

function Contact() {
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
  //##########################################################
  const handleSubmitForm = (e) => {
    e.preventDefault();
  };
  //##########################################################

  return (
    <div className="container">
      <br />
      <br />
      <br />
      <div className="card box-shadow">
        <div className="card-head">
          <div className="section-title">
            <h2>
              <strong>CONTACT</strong>
            </h2>
            <p className="">Experiencing a Problem?</p>
          </div>
        </div>
        <hr />
        <div className="card-body">
          <section id="contact" className="contact">
            <div className="container-form">
              <div className="column">
                <div className="col-lg-7 mt-3 mt-lg-0 d-flex align-items-stretch">
                  <form
                    action="forms"
                    method="post"
                    onSubmit={handleSubmit(handleSubmitForm)}
                  >
                    <input
                      type="hidden"
                      name="id"
                      className=" form-control mb-2"
                      id="name"
                      asp-for="Id"
                      style={{ width: "400px" }}
                    />

                    <div
                      className="text-danger"
                      asp-validation-summary="ModelOnly"
                    ></div>

                    <div className="form-group mb-2">
                      <input
                        type="text"
                        name="name"
                        {...register("name", {
                          required: "name is required",
                          minLength: { value: 2 },
                        })}
                        placeholder="Your Name"
                        className="form-control"
                        id="name"
                        style={{ width: "400px" }}
                      />
                      <div>
                        {errors.name && (
                          <span className="text-danger ">
                            <br />
                            {errors.name?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className=" form-group mb-2">
                      <input
                        type="email"
                        className="form-control "
                        placeholder="Email "
                        name="Email "
                        id="email"
                        {...register("Email", {
                          required: "Email is required",
                          minLength: { value: 2 },
                        })}
                        style={{ width: "400px" }}
                      />
                      <div>
                        {errors.Email && (
                          <span className="text-danger ">
                            <br />
                            {errors.Email?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Subject "
                        name="Subject "
                        id="subject"
                        {...register("Subject", {
                          required: "Subject is required",
                          minLength: { value: 2 },
                        })}
                        style={{ width: "400px" }}
                      />
                      <div>
                        {errors.Subject && (
                          <span className="text-danger ">
                            <br />
                            {errors.Subject?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <textarea
                        className="form-control "
                        placeholder="Message "
                        name="message "
                        {...register("Message", {
                          required: "Message is required",
                          minLength: { value: 2 },
                        })}
                        rows="10 "
                        data-rule="required "
                        data-msg="Please write something for us "
                      ></textarea>
                      <div>
                        {errors.Message && (
                          <span className="text-danger ">
                            <br />
                            {errors.Message?.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <br />
                    {/* <div className="mb-3 ">
                      <div className="loading ">Loading</div>
                      <div className="error-message "></div>
                      <div className="sent-message ">
                        Your message has been sent. Thank you!
                      </div>
                    </div> */}
                    <div className="text-center ">
                      <button
                        type="submit"
                        className="btn btn-success"
                        value=""
                      >
                        SEND
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <br />
      <br />
      <br /> <br />
      <br />
      <br />
    </div>
  );
}

export default Contact;
