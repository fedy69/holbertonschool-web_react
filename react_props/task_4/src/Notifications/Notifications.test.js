import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const wrapper = shallow(<Notifications/>);

describe('Test Notification.js', () => {
  it('Notification without crashing', (done) => {
    expect(wrapper.exists());
    done();
  });

  it('renders the close button', (done) => {
    expect(wrapper.find('img')).to.have.lengthOf(1);
    done();
  });
  it('renders a list with three items', () => {
    const listItems = wrapper.find(NotificationItem);
    expect(listItems).to.have.lengthOf(3);
  });

  it('renders the text "Here is the list of notifications"', (done) => {
    expect(wrapper.contains(<body className='App-body' />))
    done();
  });
  it("menu item is being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div.menuItem");
    expect(item).toHaveLength(1);
  });
  it("div.Notifications is not being displayed when displayDrawer is false", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const item = wrapper.find("div.Notifications");
    expect(item).toHaveLength(0);
  });
  it("menu item is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div.menuItem");
    expect(item).toHaveLength(1);
  });
  it("div.Notifications is being displayed when displayDrawer is true", () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    wrapper.update();
    const item = wrapper.find("div.Notifications");
    expect(item).toHaveLength(1);
  });

});