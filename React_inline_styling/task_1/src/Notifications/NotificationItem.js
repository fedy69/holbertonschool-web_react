import React from 'react';
//import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

class NotificationItem extends React.PureComponent {
  render() {
    const { type, html, value, markAsRead } = this.props;
  if (html === undefined) {
    return (
      <li data-notification-type={ type } className={styles.defaultNotificationStyle}> 
        { value }
      </li>
    );
  } else {
    return (
      <li className={styles.urgentNotificationStyle} data-notification-type={ type } dangerouslySetInnerHTML={ html }></li>
    )
  }
}
}
NotificationItem.propTypes = {
  html: PropTypes.shape({
	__html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

NotificationItem.defaultProps = {
  type: "default",
}

const styles = css({
  defaultNotificationStyle: {
		color: 'blue',
	},

  urgentNotificationStyle: {
		color: 'red',
  },
});


export default NotificationItem;