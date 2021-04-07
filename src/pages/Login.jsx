import React from 'react';
import FormLogin from '../components/FormLogin';
import logo from '../assets/logo.png';

function Login() {
  return (
    <main className="login">
      <FormLogin />
      <h1>
        <img src={logo} alt="atmos" className="logo" />
      </h1>
    </main>
  );
}

export default Login;
