import { mount } from "@vue/test-utils";
import Subnav from "@/components/navigation/Subnav.vue";

const createConfig = (routeName) => ({
  global: {
    stubs: {
      FontAwesomeIcon: true,
    },
    mocks: {
      $route: { name: routeName },
    },
  },
});

describe("Subnav", () => {
  describe("when the user is on Job page", () => {
    it("displays job count", () => {
      const routeName = "JobResults";
      const wrapper = mount(Subnav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(true);
    });
  });

  describe("when the user is not on Job page", () => {
    it("does not diaplay job count ", () => {
      const routeName = "Home";
      const wrapper = mount(Subnav, createConfig(routeName));
      const jobCount = wrapper.find("[data-test='job-count']");
      expect(jobCount.exists()).toBe(false);
    });
  });
});
