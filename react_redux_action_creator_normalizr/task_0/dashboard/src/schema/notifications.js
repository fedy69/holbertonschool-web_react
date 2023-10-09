const notificationsData = require('../../../../notifications.json')

// define function to get all notifications by user
function getAllNotificationsByUser(userId) {
  const notifications = notificationsData.filter(notification => notification.author.id === userId);
  return notifications.map(notification => notification.context);
}
//export default getAllNotificationsByUser;