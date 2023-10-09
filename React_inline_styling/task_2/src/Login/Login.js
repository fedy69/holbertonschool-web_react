import React from 'react';
import './Login.css';
import { StyleSheet, css } from 'aphrodite';

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

const Login = css({
    margintop: '30px',
    marginleft: '30px'
  });
export default Login;       