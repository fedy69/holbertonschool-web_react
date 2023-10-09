import logo from './Holberton_Logo.jpg';
import './App.css';

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
    </div>
    {/* Footer */}
    <div className='App-footer'></div>
    <p>Copyright 2020 - holberton School</p>
  </div>
  );
}

export default App;
