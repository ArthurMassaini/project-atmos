import React from 'react';
import FormLogin from '../components/FormLogin';

function Login() {
  return (
    <main className="login">
      <h1>
        <img
          src="https://www.atmosenergy.com/sites/all/themes/custom/atmos_energy/assets/images/atmos-header-logo.png"
          alt="atmos"
        />
      </h1>
      <FormLogin />
    </main>
  );
}

export default Login;
