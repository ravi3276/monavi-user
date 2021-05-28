import React from 'react'
import {useHistory} from 'react-router-dom'
import './Login.css';
import { Button } from '@material-ui/core';;
function Login() {
    const history = useHistory();
    const home=()=>{
        history.replace('/nasdaq')
    }
    return (
        <div className="login">
        <form className="login__container">
  <div class="container">
    <h1>Register</h1>
    <p>Please fill in this form to create an account.</p>
    <br />

    <label><b>Name</b></label>
    <input className="user__feilds" type="text" placeholder="Enter Name" name="name" id="name" required />

    <label><b>Phone Number</b></label>
    <input className="user__feilds" type="text" placeholder="Enter phone number" name="phone" id="phone" required />

    <label><b>Email</b></label>
    <input className="user__feilds" type="text" placeholder="Enter Email" name="email" id="email" required />

    <label for="psw"><b>Password</b></label>
    <input className="user__feilds" type="password" placeholder="Enter Password" name="psw" id="psw" required />

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input className="user__feilds" type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required />
    <br />
    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

    <button type="submit" class="registerbtn">Register</button>
  </div>
  
  <div class="container signin">
    <p>Already have an account? <a href="#" onClick={home}>Sign in</a>.</p>
  </div>
</form>
        </div>
    )
}

export default Login
