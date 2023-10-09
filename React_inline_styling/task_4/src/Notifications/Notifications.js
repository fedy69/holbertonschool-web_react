import React, { Fragment } from "react";
import PropTypes from 'prop-types';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import { StyleSheet, css } from 'aphrodite';
import NotificationItemShape from './NotificationItemShape'

class  Notifications extends React.Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this)
  }
  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );}

  markAsRead(id){
    console.log(`Notification ${id} has been marked as read`);
     }
 
  render (){
    const { displayDrawer, listNotifications } = this.props;
    return(
    <>
        <div className={menu_item}> Your notifications</div>
      { displayDrawer && (
        <div className={Notifications_style}>
          {listNotifications.length > 0 ? (
            <Fragment>
            <p>Here is the list of notifications</p>
            <ul>
              {listNotifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                type={notification.type}
                value={notification.value}
                html={notification.html} />
              ))}
            </ul>
            <button className={closeb} aria-label="Close" onClick={ () => console.log('Close button has been clicked') }>
              <img
              src={close} alt="close-icon"
              style={{ height: '10px', width: '10px' }}
              />
            </button>
            </Fragment>
          ) : (<p>No new notification for now</p>)}
        </div>
      )}
    </>
  );
}
}


Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  markAsRead: ()=>{},
  id: NaN,
};

Notifications.defaultProps = {
  displayDrawer: false,
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};

const opacityKeyframes = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const translateKeyframes = {
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "100%": {
    transform: "translateY(5px)",
  },
};
const Notifications_style = css({
  position: 'relative',
  width: '50px',
  height: '50px',
  border: '1px solid #E0434C',
  borderRadius: '4px',
  padding: '2rem',
  '& ul li[data-priority="default"]': {
      color: '#0000ff',
  },
  '& ul li[data-priority="urgent"]': {
      color: '#ff0000',
  }
});

const  menuItem = css({
  hover: {
    ':hover': {
    cursor: "pointer",
    animationName: [opacityKeyframes, translateKeyframes],
    animationDuration: '1s, 500ms',
    animationIterationCount: '3',
  }},})

const  closeb = css({
  position: 'absolute',
  top: '40px',
  right: '20px'
});

export default Notifications;