import React from 'react'
import styled from 'styled-components';


function Contact() {
 return (
   <Container>
    <div class="card box-shadow">
        <div class="card-head">
            <div class="section-title">
                <h2><strong>CONTACT</strong></h2>
                <p class="">Experiencing a Problem?</p>
            </div>
        </div>
        <hr/>
        <div class="card-body">
                 <section id="contact" class="contact">
                <div class="container-form">
                    <div class="column">
                        <div class="col-lg-7 mt-3 mt-lg-0 d-flex align-items-stretch">

                            <form action="forms" method="post" role="form" class="php-email-form">

                                <input type="hidden" name="id" class=" form-control " id="name" asp-for="Id" />

                                <div class="text-danger" asp-validation-summary="ModelOnly"></div>

                                <div class="form-group ">
                                    <input type="text" name="name" placeholder="Your Name" class="form-control" id="name " asp-for="Name" style="width:400px" />
                                    <div>
                                        <span asp-validation-for="Name" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class=" form-group">
                                    <input type="email" class="form-control " placeholder="Email " name="email " id="email" asp-for="Email" style="width:400px" />
                                    <div>
                                        <span asp-validation-for="Email" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <input type="text" class="form-control " placeholder="Subject " name="subject " id="subject" asp-for="Subject" style="width:400px" />
                                    <div>
                                        <span asp-validation-for="Subject" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="form-group ">
                                    <textarea class="form-control " placeholder="Message " name="message " rows="10 " asp-for="Message" data-rule="required " data-msg="Please write something for us "></textarea>
                                    <div>
                                        <span asp-validation-for="Message" class="text-danger"></span>
                                    </div>
                                </div>
                                <div class="mb-3 ">
                                    <div class="loading ">Loading</div>
                                    <div class="error-message "></div>
                                    <div class="sent-message ">Your message has been sent. Thank you!</div>
                                </div>
                                <div class="text-center ">
                                    <button type="submit" class="btn btn-success" value="">SEND</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
   </Container>
 )
}

export default Contact

const Container = styled.div`


`
