<template>
  <div class="flex flex-col">
    <label class="font-semibold mb-1">{{ config.label }}</label>
    <input
      class="border outline-none"
      :class="errorClass"
      :type="config.type"
      :placeholder="config.placeholder"
      :value="modelValue"
      @input="inputHandler"
    />

    <p v-if="error.$error" class="text-red-600 text-xs mt-1">
      {{ error.$errors[0].$message }}
    </p>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Input",
  props: {
    config: {
      type: Object,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
    error: {
      type: Object,
      required: true,
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const errorClass = computed(() => {
      if (props.error.$error) {
        return { error: true };
      }
      return null;
    });

    const inputHandler = ($event: Event) => {
      // console.log(props.error);
      const target = $event.target as HTMLInputElement;
      emit("update:modelValue", target.value);
    };
    return { inputHandler, errorClass };
  },
});
</script>
<style scoped>
.error {
  border: 1px solid red;
}
</style>
