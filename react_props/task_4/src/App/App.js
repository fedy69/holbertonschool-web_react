import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import './App.css';

function App({isLoggedIn}) {
  return (
    <Fragment>
      <Notifications />
      <div className="App">
        <Header />
        {isLoggedIn === false ? <Login /> : <CourseList /> }
        <Footer className='App-footer' />
      </div>
    </Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
