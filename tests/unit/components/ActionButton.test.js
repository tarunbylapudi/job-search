import ActionButton from "@/components/ActionButton.vue";
import { mount } from "@vue/test-utils";

describe("ActionButton", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "zinx",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("zinx");
  });

  it("checks for correct CSS class", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "zinx",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});
