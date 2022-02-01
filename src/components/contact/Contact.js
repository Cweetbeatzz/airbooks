import React from "react";
import styled from "styled-components";

function Contact() {
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
                  <form action="forms" method="post">
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
                        placeholder="Your Name"
                        className="form-control"
                        id="name "
                        style={{ width: "400px" }}
                      />
                      <div>
                        <span
                          asp-validation-for="Name"
                          className="text-danger"
                        ></span>
                      </div>
                    </div>
                    <div className=" form-group mb-2">
                      <input
                        type="email"
                        className="form-control "
                        placeholder="Email "
                        name="email "
                        id="email"
                        style={{ width: "400px" }}
                      />
                      <div>
                        <span
                          asp-validation-for="Email"
                          className="text-danger"
                        ></span>
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <input
                        type="text"
                        className="form-control "
                        placeholder="Subject "
                        name="subject "
                        id="subject"
                        style={{ width: "400px" }}
                      />
                      <div>
                        <span
                          asp-validation-for="Subject"
                          className="text-danger"
                        ></span>
                      </div>
                    </div>
                    <div className="form-group mb-2">
                      <textarea
                        className="form-control "
                        placeholder="Message "
                        name="message "
                        rows="10 "
                        asp-for="Message"
                        data-rule="required "
                        data-msg="Please write something for us "
                      ></textarea>
                      <div>
                        <span
                          asp-validation-for="Message"
                          className="text-danger"
                        ></span>
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
