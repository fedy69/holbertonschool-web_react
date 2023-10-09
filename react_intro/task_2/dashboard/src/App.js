import logo from './Holberton_Logo.jpg';
import './App.css';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </header>
    {/*body*/}
    <div className="App-body">
      <p>Login to access the ful dashboard</p>
      <label for='email'>Email</label>
      <input type='email' id='email' name='email'></input>
      <label for='password'>Password</label>
      <input type='password' id='password' name='password'></input>
      <button>OK</button>
    </div>
    {/* Footer */}
    <div className='App-footer'></div>
    <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
  </div>
  );
}

export default App;
