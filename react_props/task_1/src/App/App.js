import React, { Fragment } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import '/App.css';

function App() {
  return (
    <Fragment>
      <Notifications/>
    <div className="App">
      <Header/>
      <Login className='App-body'/>
      <Footer className='App-footer'/>
    </div>
    </Fragment>
  );
}

export default App;
