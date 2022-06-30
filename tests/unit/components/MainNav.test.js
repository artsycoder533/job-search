import { mount } from '@vue/test-utils';

import MainNav from '@/components/MainNav.vue';

describe("MainNav", () => {
  it("displays company name", async() => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Natasha's Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = mount(MainNav);
    // find all elements by an attribute
    const navigationMenuItems = wrapper.findAll("[data-test='main-nav-list-item']");
    // map through the array that findAll returns and pull out the text of each li into an array
    const navigationMenuTexts = navigationMenuItems.map(item => item.text());
    // check that the array of text that has been mapped over contains the same text as the array we specified
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Natasha",
      "How We Hire",
      "Students",
      "Jobs"
    ]);
  });
});

describe("when user is logged out", () => {
  it("prompts user to sign in", () => {
    const wrapper = mount(MainNav, {
      data() {
        return {
          isLoggedIn: false,
        };
      },
    });
    const loginButton = wrapper.findComponent({ name: "ActionButton"});
    const profileImage = wrapper.findComponent({ name: "ProfileImage"});
    //returns a boolean 
    expect(loginButton.exists()).toBe(true);
    expect(profileImage.exists()).toBe(false);
  });
});

describe("when user logs in", () => {
  it("displays user profile image", () => {
    const wrapper = mount(MainNav, {
      data() {
        return {
          isLoggedIn: true,
        };
      },
    });
    const loginButton = wrapper.findComponent({ name: "ActionButton"});
    const profileImage = wrapper.findComponent({ name: "ProfileImage"});
    //returns a boolean 
    expect(loginButton.exists()).toBe(false);
    expect(profileImage.exists()).toBe(true);
  });
});