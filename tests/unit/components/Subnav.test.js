import { mount } from "@vue/test-utils";

import Subnav from "@/components/Subnav";

describe("Subnav", () => {
  describe("when user is on the job page", () => {
    it("displays job count", () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobRseultsPage: true,
          }
        }
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    })
  });

  describe("when user is not on the jobs page", () => {
    it("does NOT display job count", () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          }
        },
        data() {
          return {
            onJobResultsPage: false,
          }
        }
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    })
  });
})