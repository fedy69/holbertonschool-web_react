import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';

const wrapper = shallow(<App />);

describe('<App />', () => {
  it('render App component', () => {
    shallow(<App />);
    expect(wrapper.exists());
  });
  it('renders App-header', () => {
    expect(wrapper.contains(<Header className="App-header" />));
  });
  it('renders App-body', () => {
    expect(wrapper.contains(<Login className='App-body' />));
  });
  it('renders App-footer', () => {
    expect(wrapper.contains(<Footer className='App-footer' />));
  });
});