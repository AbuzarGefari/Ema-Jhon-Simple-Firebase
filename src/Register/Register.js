import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <div>
                <h2>Register :Create Account</h2>
              <form onSubmit="">
                  <input type="email" placeholder ="Enter Your Email" name="" id="" /> <br />
                  <input type="password" name="" placeholder="Enter Your password" id="" /> <br />
                  <input type="password" name="" placeholder="Re- Enter Your password" id="" />
                  <br />
                  <input type="submit" value="Submit" />
              </form>
              <p>Already Have An Accoount ?<Link to="/logi"> Login</Link></p>
            </div>
        </div>
    );
};

export default Register;