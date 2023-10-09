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

});