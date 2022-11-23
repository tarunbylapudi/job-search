import ProfileImage from "@/components/ProfileImage.vue";
import { mount } from "@vue/test-utils";

describe("ProfileImage", () => {
  it("renders", () => {
    const wrapper = mount(ProfileImage);
    expect(wrapper.exists()).toBe(true);
  });
});
