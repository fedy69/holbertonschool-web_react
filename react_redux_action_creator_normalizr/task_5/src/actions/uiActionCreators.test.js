import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';

describe('uiActionCreators', () => {
  describe('login', () => {
    it('should return an action with type LOGIN and user object', () => {
      const email = 'test@test.com';
      const password = 'test123';
      const expectedAction = {
        type: LOGIN,
        user: { email, password },
      };
      expect(login(email, password)).toEqual(expectedAction);
    });
  });

  describe('logout', () => {
    it('should return an action with type LOGOUT', () => {
      const expectedAction = {
        type: LOGOUT,
      };
      expect(logout()).toEqual(expectedAction);
    });
  });

  describe('displayNotificationDrawer', () => {
    it('should return an action with type DISPLAY_NOTIFICATION_DRAWER', () => {
      const expectedAction = {
        type: DISPLAY_NOTIFICATION_DRAWER,
      };
      expect(displayNotificationDrawer()).toEqual(expectedAction);
    });
  });

  describe('hideNotificationDrawer', () => {
    it('should return an action with type HIDE_NOTIFICATION_DRAWER', () => {
      const expectedAction = {
        type: HIDE_NOTIFICATION_DRAWER,
      };
      expect(hideNotificationDrawer()).toEqual(expectedAction);
    });
  });
});
