import logo from './logo.svg';
import './App.css';

function App() {
  return (
    
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Body */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
      </div>
        </a>
      </header>
           {/* Footer */}
     <div className="App-footer">
     <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
   </div>
 </div>
  );
}

export default App;
