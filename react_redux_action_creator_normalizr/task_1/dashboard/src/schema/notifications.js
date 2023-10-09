const { normalize, schema } = require('normalizr');
const notifications = require('../../../../notifications.json');


const user = new schema.Entity('users');

// Define the message entity schema, with the guid attribute as the ID
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });

// Define the notification entity schema, with author and context as nested entities
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});


export const normalizedData = normalize(notifications, [notification]);

export const notificationsSchema = [notification];