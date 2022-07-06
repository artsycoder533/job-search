import { shallowMount } from "@vue/test-utils";

import MainNav from "@/components/MainNav.vue";

describe("MainNav", () => {
  it("displays company name", async () => {
    // mouny also mounts all of its children
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Natasha's Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    // find all elements by an attribute
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    // map through the array that findAll returns and pull out the text of each li into an array
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    // check that the array of text that has been mapped over contains the same text as the array we specified
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Natasha",
      "How We Hire",
      "Students",
      "Jobs",
    ]);
  });
});

describe("when user is logged out", () => {
  it("prompts user to sign in", () => {
    const wrapper = shallowMount(MainNav);
    const loginButton = wrapper.find("[data-test='login-button']");
    //returns a boolean
    expect(loginButton.exists()).toBe(true);
  });
});

describe("when user logs in", () => {
  //make this function async to make sure the component is mounted and rendered first
  it("displays user profile image", async () => {
    const wrapper = shallowMount(MainNav);
    let profileImage = wrapper.find("[data-test='profile-image']");
    //check that profile image is not shown initially
    expect(profileImage.exists()).toBe(false);
    //simulate a click of the login button
    const loginButton = wrapper.find("[data-test='login-button']");
    // use await to wait until the process is done and vue rerenders the component
    await loginButton.trigger("click");
    //search the template again for the profile image
    profileImage = wrapper.find("[data-test='profile-image']");
    expect(profileImage.exists()).toBe(true);
  });

  it("displays sub navigation menu with additional info", async () => {
    const wrapper = shallowMount(MainNav);
    let subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");

    subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(true);
  });
});
