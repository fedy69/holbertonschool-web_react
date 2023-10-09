import React from "react";
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import './Notifications.css';

function Notifications() {
  return (
    <div className='Notifications'>
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='default'>New resume available</li>
        <li data-priority='urgent' dangerouslySetInnerHTML={{ __html: getLatestNotification()   }}></li>
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