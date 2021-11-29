import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import google from './Group 573.png';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const navigate = useNavigate();
    const {  user, signInUsingGoogle, error, register } = useAuth();

    const handelClick = e =>{
const field = e.target.name;
const value = e.target.value;
const newLoginData = {...loginData};
newLoginData[field] = value;
 setLoginData(newLoginData);
    };

    const handelSubmit = e =>{
        if(loginData.password !== loginData.password2){
            alert('Your password did not match');
return
        };

        register(loginData.email, loginData.password, loginData.name, navigate);
        e.preventDefault();
    };

    return (

        <div style={{backgroundColor: "gainsboro"}}>
            <h2 style={{color: "gold"}}>Register</h2>
            
       <form onSubmit={handelSubmit}>
        
        <label>Name</label>   <br/>
        <input onBlur={handelClick} type="text" name="name"  placeholder="Your name.."/>
        
    <br/>
    <br/>
        <label>Email</label>   <br/>
        <input onBlur={handelClick} name="email" type="email"   placeholder="Your Email"/>
        <br/>
        <br/>
        <label>password</label>   <br/>
        <input onBlur={handelClick} name="password" type="password"   placeholder="Your password"/>
        <br/>
        <br/>
        <label>Confirm password</label>   <br/>
        <input onBlur={handelClick} name="password2" type="password"   placeholder="Your confirm password"/>
        <br/>
        <br/>
        <input type="submit" value="Submit"/>
     
                </form>
                <br/>
                <button onClick={signInUsingGoogle}><img width="15%" src={google} alt="google"/>Google Sign In</button>
      <p> <Link style={{textDecoration: "none"}} to="/login">alredy have an account?</Link ></p>
           
           {user?.email && <Alert severity="success">User Created successfully!</Alert>}
                    {error && <Alert variant="danger">{error}</Alert>}
                    
        </div>
    );
};

export default Register;