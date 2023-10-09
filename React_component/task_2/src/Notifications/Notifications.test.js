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
},
  describe("Notifications with listNotifications", () => {
    beforeEach(() => {
      latestNotification = getLatestNotification();
      listNotifications = [
        { id: 1, type: "default", value: "New course available" },
        { id: 2, type: "urgent", value: "New resume available" },
        { id: 3, type: "urgent", html: { __html: latestNotification } },
      ];
    });},),
    describe("Notifications without listNotifications or empty listNotifications", () => {
      beforeEach(() => {
        listNotifications = [];
      });
  
      it("Notifications renders Notification Item correct with empty listNotifications", () => {
        const wrapper = shallow(
          <Notifications displayDrawer listNotifications={listNotifications} />
        );
        expect(wrapper.exists());
        wrapper.update();
        const listItems = wrapper.find("NotificationItem");
        expect(listItems).toHaveLength(1);
        expect(listItems.html()).toEqual(
          '<li data-notification-type="default">No new notification for now</li>'
        );
      });
      it("wmarkAsRead is being called with the right message", () => {
        const wrapper = shallow(<Notifications displayDrawer />);
  
        console.log = jest.fn();
  
        const instance = wrapper.instance();
  
        const id = 5;
  
        instance.markAsRead(id);
  
        expect(console.log).toHaveBeenCalledWith(
          `Notification ${id} has been marked as read`
        );
        jest.restoreAllMocks();
      });
    })
)
