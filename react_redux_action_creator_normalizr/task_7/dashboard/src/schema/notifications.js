const { normalize, schema } = require('normalizr');
const notifications = require('../../../../notifications.json');


const user = new schema.Entity("users");

const message = new schema.Entity("messages", {}, { idAttribute: "guid" });

const notification = new schema.Entity("notifications", {
  author: user,
  context: message,
});

const normalizedData = normalize(notificationsData, [notification]);

function getAllNotificationsByUser(userId) {
  const { entities } = normalizedData;
  const userNotifications = entities.users[userId].notifications;

  return Object.values(userNotifications).map((notification) => {
    const { author, context, ...rest } = entities.notifications[
      notification
    ];
    return {
      ...rest,
      context: entities.messages[context],
      author: entities.users[author],
    };
  });
}