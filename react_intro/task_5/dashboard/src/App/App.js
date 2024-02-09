import './App.css';
import {getFooterCopy, getFullYear} from '../utils/utils';
import logo from '../assets/holberton-logo.jpg';

function App() {
  const date = getFullYear();
  const footer = getFooterCopy(true);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        <label for='email'>Email</label>
        <input id='email' type='email'></input>
        <label for='password'>Password</label>
        <input id='password' type='password'></input>
        <button>OK</button>
        </body>
      <footer className='App-footer'>
        <p>Copyright {date} - {footer}</p>
    </footer>
    </div>
  );
}

export default App;
