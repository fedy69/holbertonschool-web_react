import { login, logout, displayNotificationDrawer, hideNotificationDrawer } from './uiActionCreators';
import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from './uiActionTypes';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import { loginRequest } from './uiActionCreators';
import { LOGIN_SUCCESS, LOGIN_FAILURE } from './uiActionTypes';


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
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('loginRequest', () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it('dispatches LOGIN and LOGIN_SUCCESS when API call is successful', () => {
    const email = 'test@example.com';
    const password = 'password';
    const responseBody = { token: '1234' };
    fetchMock.getOnce('/login-success.json', {
      body: responseBody,
      headers: { 'content-type': 'application/json' }
    });

    const expectedActions = [
      { type: LOGIN, payload: { email, password } },
      { type: LOGIN_SUCCESS, payload: responseBody }
    ];
    const store = mockStore({});
    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('dispatches LOGIN and LOGIN_FAILURE when API call fails', () => {
    const email = 'test@example.com';
    const password = 'password';
    fetchMock.getOnce('/login-success.json', 404);

    const expectedActions = [
      { type: LOGIN, payload: { email, password } },
      { type: LOGIN_FAILURE, payload: 'Not Found' }
    ];
    const store = mockStore({});
    return store.dispatch(loginRequest(email, password)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});

