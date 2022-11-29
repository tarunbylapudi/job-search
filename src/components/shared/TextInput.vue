<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    class="w-full text-lg text-normal focus:outline-none"
    @input="inputHandler"
  />
</template>
<script>
export default {
  name: "TextInput",
  props: {
    placeholder: {
      type: String,
      required: false,
      default: "Full Stack Developer",
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
  emits: ["update:modelValue"],

  methods: {
    inputHandler($event) {
      this.$emit("update:modelValue", $event.target.value);
    },
  },
};
</script>
