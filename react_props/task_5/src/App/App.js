import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import './App.css';

function App({ isLoggedIn }) {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  const htmlObj = {
    __html: getLatestNotification(),
  };
  const listNotifications = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New course available'},
    {id: 3, type: 'urgent', html: htmlObj}
  ];
  return (
    <Fragment>
      <Notifications listNotifications={listNotifications}/>
      <div className="App">
        <Header />
        {isLoggedIn === false ? <Login /> : <CourseList listCourses={listCourses} /> }
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
