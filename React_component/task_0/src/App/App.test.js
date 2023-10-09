import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';


const wrapper = shallow(<App />);

describe('<App />', () => {
  it('render App component', () => {
    shallow(<App />);
    expect(wrapper.exists());
  });
  it('renders App-header', () => {
    expect(wrapper.contains(<Header />));
  });
  it('renders App-body', () => {
    expect(wrapper.contains(<Login />));
  });
  it('renders App-footer', () => {
    expect(wrapper.contains(<Foote />));
  });

  it("<App /> doesn't contain <CourseList />", () => {
		expect(wrapper.contains(<CourseList />)).to.equal(false);
	});

});

describe("Testing the <App /> when isLoggedIn is true", () => {
	let props = {
		isLoggedIn: true,
	};

	let component = shallow(<App {...props} />);
	expect(component.contains(<Login />)).to.equal(false);
	expect(component.contains(<CourseList />)).to.equal(true);
});