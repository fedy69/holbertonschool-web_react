import { shallow } from "enzyme";
import React from "react";
import Notifications from "./Notifications";

describe("<Notifications />", () => {
  it("Notifications renders without errors", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Notifications renders three items", () => {
    const wrapper = shallow(<Notifications />);
    wrapper.update();
    const listItems = wrapper.find("NotificationItem");
    expect(listItems).toBeDefined();
    expect(listItems.first().html()).toEqual(
      '<li data-notification-type="default">New course available</li>'
    );
  });
});