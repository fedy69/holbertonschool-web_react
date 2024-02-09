import './App.css';
import {getFooterCopy, getFullYear} from './utils';

function App() {
  const date = getFullYear();
  const footer = getFooterCopy(true);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src="./holberton_logo.jpg" className='App-logo' alt='logo' />
        <h1>School dashboard</h1>
      </header>
      <body className='App-body'>
        <p>Login to access the full dashboard</p>
        </body>
      <footer className='App-footer'>
        <p>Copyright {date} - {footer}</p>
    </footer>
    </div>
  );
}

export default App;
