import React from 'react';
import { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import google from './Group 573.png';
import  './Login.css';

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
     console.log(loginData);
        setLoginData(newLoginData);
    };
    
    const handelSubmit = e => {

        login(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
    };

    return (
        <div className='login-page-background'>
            <h2 style={{color: "#09872ac7"}}>Login</h2>

             <form onSubmit={handelSubmit}>
        
      
        <label style={{fontWeight: "bold"}}>Email</label>
        <br/>
        <input onBlur={handelClick} name="email" type="email"   placeholder="Your Email"/>
        <br/>
      
        <label style={{fontWeight: "bold"}}>password</label>
        <br/>
        <input onBlur={handelClick} name="password" type="password"   placeholder="Your password"/>
       
        <br/>
        <input style={{marginTop: "2%"}} type="submit" value="Submit"/>
     
                </form>
<br/>
                <button style={{backgroundColor: "#4343c9b8", color: "white"}} onClick={signInUsingGoogle}><img style={{marginRight: "6%"}} width="15%" src={google} alt="google"/>Google Sign In</button>
      <p> New User ?<Link style={{textDecoration: "none", color: "red", fontSize: "1rem", fontWeight: "bold"}} to="/register">Please register</Link ></p>
           
           {user?.email && <Alert severity="success">User Login successfully!</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}

        </div>
    );
};

export default Login;