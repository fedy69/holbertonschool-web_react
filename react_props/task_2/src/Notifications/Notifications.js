import React from "react";
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import './Notifications.css';

function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <NotificationItem type='default' value='New course available' />
        <NotificationItem type='urgent' value='New resume available' />
        <NotificationItem type='urgent' html={{ __html: getLatestNotification() }} />
      </ul>
      <button className='close-b' aria-label="Close" onClick={ () => console.log('Close button has been clicked') }>
        <img
        src={close} alt="close-icon"
        style={{ height: '10px', width: '10px' }}
        />
      </button>
    </div>
  );
}

export default Notifications;