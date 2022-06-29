import { mount } from '@vue/test-utils';

import MainNav from '@/components/MainNav.vue';

describe("MainNav", () => {
  it("displays company name", async() => {
    const wrapper = mount(MainNav);
    expect(wrapper.text()).toMatch("Natasha's Careers");
  });
});