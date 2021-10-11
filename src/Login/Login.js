import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="input-form">
            <div>
<h2>Login</h2>
<form onSubmit="">
<input type="email" name="email" placeholder="Enter Your Email" id="" /> <br />
<input type="password" placeholder="Enter Your Password" name="" id="" /> <br />
<input type="submit" value="Submit" />

</form>
<p>New to Ema-Jhon <Link to="/register">Create Account</Link> </p>
<div>---------------or--------------</div>
<button className="btn-regular">Google Signin</button>
            </div>
        </div>
    );
};

export default Login;