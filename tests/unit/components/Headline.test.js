import { mount } from "@vue/test-utils";

import Headline from "@/components/Headline.vue";
import { nextTick } from "vue";

describe("Headline", () => {
  beforeEach(() => {
    jest.useFakeTimers("legacy");
  });
  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays introductry action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes the action verb at constant interval", () => {
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
  });

  it("it swaps out the action verb after the first interval", async () => {
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers();
    await nextTick();
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Create for everyone");
  });

  it("it removes interval when the component disappears", () => {
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
