import React from 'react';
import './Notifications.css';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';


export default function Notifications() {
    return (
        <div className='Notifications'>
        <button
            style={{
                background: 'none',
                border: 'none',
                fontSize: '5px',
                cursor: 'pointer',
                position: 'absolute',
                top: '20px',
                right: '20px',

            }}
        aria-label='Close'
        onClick={(e) => {
            console.log('Close button has been clicked');
        }}
        >
        <img src={closeIcon} alt='close-icon' />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
				<li data-priority="default">
					New course available
				</li>
				<li data-priority="urgent">
					New resume available
				</li>
				<li
					data-priority="urgent"
					dangerouslySetInnerHTML={{__html: getLatestNotification()}}
				>
				</li>
			</ul>
        </div>
    );
    };
