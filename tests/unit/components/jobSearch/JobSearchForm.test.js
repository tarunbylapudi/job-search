import { mount } from "@vue/test-utils";

import JobSearchForm from "@/components/jobSearch/JobSearchForm.vue";

describe("JobSearchForm", () => {
  describe("when the user submits form", () => {
    const push = jest.fn();
    const $router = { push };
    it("directs the user to the job results page with user entered params", () => {
      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          stubs: {
            FontAwesomeIcon: true,
          },
          mocks: {
            $router,
          },
        },
      });

      const roleInput = wrapper.find("[data-test='role-input']");
      roleInput.setValue("FSE");

      const locationInput = wrapper.find("[data-test='location-input']");
      locationInput.setValue("Vizag");

      const submitButton = wrapper.find("[data-test='form-submit-button']");
      submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: { role: "FSE", location: "Vizag" },
      });
    });
  });
});
