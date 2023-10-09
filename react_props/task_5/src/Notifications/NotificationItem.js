import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type, html, value }) {
  if (html === undefined) {
    return (
      <li data-notification-type={ type }> 
        { value }
      </li>
    );
  } else {
    return (
      <li data-notification-type={ type } dangerouslySetInnerHTML={ html }></li>
    )
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

export default NotificationItem;