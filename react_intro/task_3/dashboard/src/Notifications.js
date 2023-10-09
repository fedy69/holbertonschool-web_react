import React from 'react';
import './Notifications.css';

function Notifications(){
    return (<div className='Notifications'>
        <p>Here is the list of notifications</p>
        <ul>
            <li>New Course available</li>
            <li data-priority='urgent'>New resume available</li>
            <li data-priority='urgent' dangerouslySetInnerHTML={{__html: getLatestNotification()}}></li>
        </ul>
        <button aria-label='Close' onClick={buttonClick()} style={buttonStyle}>
            <img src={close_icon} style={imageStyle}></img>
        </button>
        </div>);
}
const buttonClick = () => {
  console.log('Close button has been clicked');
}
const buttonStyle = {
    position: 'fixed',
    top: '1em',
    right: '1em',
    background: 'transparent',
    border: 'none',
  }
  
  const imageStyle = {
    width: '20px',
    height: '20px',
  }
  
export default Notifications;