import { mount } from "@vue/test-utils";
import Subnav from "@/components/Subnav.vue";

describe("Subnav", () => {
  describe("when the user is on Job page", () => {
    it("displays job count", () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: true,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when the user is not on Job page", () => {
    it("does not diaplay job count ", () => {
      const wrapper = mount(Subnav, {
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
        },
        data() {
          return {
            onJobResultsPage: false,
          };
        },
      });
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
