<template>
  <button :class="buttonClass">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { computed, toRefs } from "vue";
export default defineComponent({
  name: "ActionBUtton",

  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: false,
      default: "primary",
      validator: (value: string) => {
        return ["primary", "secondary"].includes(value);
      },
    },
  },
  setup(props) {
    const { type } = toRefs(props);
    const buttonClass = computed(() => {
      return { [type.value]: true };
    });
    return { buttonClass };
  },

  // computed: {
  //   buttonClass() {
  //     return {
  //       [this.type]: true,
  //       // primary: this.type === "primary",
  //       // secondary: this.type === "secondary",
  //     };
  //   },
  // },
});
</script>

<style scoped>
button {
  padding: 0.6rem 0.8rem;
  font-weight: 500;
  border-width: 0px;
}
.primary {
  @apply text-white bg-brand-blue-1 hover:shadow-blue rounded;
}
.secondary {
  @apply bg-transparent text-brand-blue-1 hover:bg-brand-blue-2 hover:text-white;
}

@media screen and (max-width: 500px) {
  button {
    padding: 0.5rem 0.7rem;
    font-size: 0.75rem;
  }
}
</style>
