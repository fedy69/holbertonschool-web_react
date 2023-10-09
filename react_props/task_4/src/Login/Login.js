import React from 'react';
import './Login.css';

function Login() {
  return (
    <body className='App-body'>
      <p>Login to access the full dashboard</p>
      <div className="login">
        <label htmlFor="username">
          Email:
          <input></input>
        </label>
        <label htmlFor="password">
          Password:
          <input></input>
        </label>
        <button>Ok</button>
      </div>
    </body>
  );
}

export default Login;       