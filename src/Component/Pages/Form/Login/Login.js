import React from 'react';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import google from './Group 573.png';

const Login = () => {

    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const navigate = useNavigate();
    const { user, signInUsingGoogle, login, error } = useAuth();

    const handelClick = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    };
    
    const handelSubmit = e => {

        login(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    };

    return (
        <div style={{backgroundColor: "gainsboro"}}>
            <h2 style={{color: "gold"}}>Login</h2>

             <form onSubmit={handelSubmit}>
        
      
        <label>Email</label>
        <br/>
        <input onBlur={handelClick} name="email" type="email"   placeholder="Your Email"/>
        <br/>
      
        <label>password</label>
        <br/>
        <input onBlur={handelClick} name="password" type="password"   placeholder="Your password"/>
       
        <br/>
        <input type="submit" value="Submit"/>
     
                </form>
<br/>
                <button onClick={signInUsingGoogle}><img width="15%" src={google} alt="google"/>Google Sign In</button>
      <p> New User ?<Link style={{textDecoration: "none"}} to="/register">Please register</Link ></p>
           
           {user?.email && <Alert severity="success">User Login successfully!</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}

        </div>
    );
};

export default Login;