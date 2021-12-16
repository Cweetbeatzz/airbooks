import React from 'react'
import styled from 'styled-components';


function Register() {
 return (
  <Container>
   <div class=" w-100">
        <div class="text-center">
            <h1><strong>REGISTER</strong></h1>
        </div>
        <hr class="btn-dark"/>
        <div class="p-3 w-100">
            <div class="col-md-7 mx-auto">
                <form asp-action="Register">
                    <div class="form-group row">
                        <input type="text" name="Firstname" value="" placeholder="Firstname" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>
                    <div class="form-group row">
                        <input type="text" name="Lastname" value="" placeholder="Lastname" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>
                    <div class="form-group row ">
                        <input type="text" name="Username" value="" placeholder="Username" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>
                    <div class="form-group row">
                        <input type="email" name="email" value="" placeholder="Email" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>
                    <div class="form-group row">
                        <input type="text" name="Address" value="" placeholder="Address" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>
                    <div class="form-group row">
                        <input type="text" name="Phone" value="" placeholder="Phone" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>
                    <div class="form-group row">
                        <input type="text" name="State" value="" placeholder="State" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>
                    <div class="form-group row">
                        <input type="text" name="Country" value="" placeholder="Country" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>
                    <div class="form-group row">
                        <input type="text" name="PostalCode" value="" placeholder="PostalCode" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>

                    <div class="form-group row">
                        <input type="password" name="Password" value="" placeholder="Password" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>
                    <div class="form-group row">
                        <input type="password" name="ConfirmPassword" value="" placeholder="Confirm Password" class="form-control bg-light" />
                        <span class="text-danger"></span>
                    </div>
                    <br />
                    <div class="form-group row justify-content-center">
                        <div class="form-check">
                            <input type="checkbox"/>
                            <label class="form-check-label"> I accept the <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a></label>
                        </div>
                    </div>
                    <hr class="btn-primary" />

                    <div class="form-group row justify-content-center">
                        <button type="submit" value="Create" class="btn btn-primary "><strong>SUBMIT</strong></button>
                    </div>
                </form>
            </div>
        </div>
      </div>
  </Container>
 )
}

export default Register

const Container = styled.div`


`