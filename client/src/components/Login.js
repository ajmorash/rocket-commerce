import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { login, register } from '../actions/authActions';
import './styles/Login.css'


function Login(props){

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const onChange = (e) => {
    if(e.target.name == "loginEmail"){
      setLoginEmail(e.target.value);
    }
    if(e.target.name == "loginPassword"){
      setLoginPassword(e.target.value);
    }
    if(e.target.name == "registerName"){
      setRegisterName(e.target.value);
    }
    if(e.target.name == "registerEmail"){
      setRegisterEmail(e.target.value);
    }
    if(e.target.name == "registerPassword"){
      setRegisterPassword(e.target.value);
    }
  }

  const login = () => {

    const loginData = {
      email: loginEmail,
      password: loginPassword
    }

    props.login(loginData);


  }

  const register = () => {
    const registerData = {
      name: registerName,
      email: registerEmail,
      password: registerPassword
    }

    props.register(registerData);
  }

  return(
    <div className = 'login-container'>
      <div className ='login'>
        <h1>Login</h1>
        <h2>Email:</h2>
          <input id='login-email' type='text' name="loginEmail" value={loginEmail} onChange={onChange}/>
        <h2>Password:</h2>
          <input id='login-password' type='password' name="loginPassword" value={loginPassword} onChange={onChange}/><br />
        <button id='login-button' onClick={login}>Login</button>
      </div>
        <div className ='register'>
          <h1>Register</h1>
          <h2>Name:</h2>
           <input id='register-name' type='text' name="registerName" value={registerName} onChange={onChange}/>
          <h2>Email:</h2>
            <input id='register-email' type='text' name="registerEmail" value={registerEmail} onChange={onChange}/>
          <h2>Password:</h2>
          <input id='register-password' type='password' name="registerPassword" value={registerPassword} onChange={onChange}/><br />
        <button id='register-button' onClick={register}>Register</button>
      </div>
    </div>

  )
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, { login, register })(Login);