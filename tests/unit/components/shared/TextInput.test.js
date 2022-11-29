import { mount } from "@vue/test-utils";

import TextInput from "@/components/shared/TextInput.vue";

describe("TextInput", () => {
  it("communicates that user has entered the char or not!", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");

    input.setValue("N");
    input.setValue("NY");
    input.setValue("NYC");

    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["N"], ["NY"], ["NYC"]]);
  });
});
