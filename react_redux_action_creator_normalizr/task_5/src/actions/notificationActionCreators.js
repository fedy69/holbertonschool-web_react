import { MARK_AS_READ, SET_TYPE_FILTER } from './notificationActionTypes';

export const markAsRead = (id) => ({
  type: MARK_AS_READ,
  id,
});

export const setTypeFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter,
});