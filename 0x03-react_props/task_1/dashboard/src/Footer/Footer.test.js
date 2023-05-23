import React from "react";
import { shallow } from "enzyme";
import Footer from "./Footer";

describe("<Footer />", () => {
  it("Footer renders without any errors", () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toEqual(true);
  });
  it("Verify that the components at the very least render the text Copyright", () => {
    const wrapper = shallow(<Footer />);
    wrapper.update();
    expect(wrapper.find("div.footer p")).toHaveLength(1);
    expect(wrapper.find("div.footer p").text()).toContain("Copyright");
  });
});