<template>
  <input
    type="text"
    :value="modelValue"
    :placeholder="placeholder"
    @input="inputHandler"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
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
    inputHandler($event: Event) {
      const target = $event.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
    },
  },
});
</script>
<style scoped>
input {
  font-size: 1rem;
  line-height: 1.75rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
}
@media only screen and (max-width: 500px) {
  input {
    font-size: 0.8rem;
    line-height: 2rem;
  }
}
</style>
