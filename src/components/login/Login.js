import React from 'react'
import styled from 'styled-components';


function Login() {
 return (
   <Container>
      <div class=" w-100">
        <div class="text-center">
            <h1><strong>LOGIN</strong></h1>
        </div>

        <hr class="btn-dark" />
        <div class=" p-3 w-100 ">
            <div class="col-md-6 mx-auto ">
                <form asp-action="Login" method="post" class="">
                    <div class="form-group row">
                        <input type="email" name="Email" value="" placeholder="Email" class="form-control text-white bg-light" />
                        <span class="text-danger"></span>
                    </div>

                    <div class="form-group row">
                        <input type="password" name="Password" value="" placeholder="Password" class="form-control text-white bg-light" />
                        <span class="text-danger"></span>

                    </div>
                    <hr class="btn-primary" />
                    <br />
                    <div class="form-group row justify-content-center">
                        <div class="form-check">
                            <input type="checkbox" />
                            <label class="form-check-label"> Remember Me</label>
                        </div>
                    </div>

                    <div class="form-group row justify-content-center">
                        <button type="submit" class="btn btn-primary text-white" id="login" value="Login"><strong>LOGIN</strong></button>
                    </div>
                </form>
            </div>
        </div>
      </div>
   </Container>
 )
}

export default Login

const Container = styled.div`


`
