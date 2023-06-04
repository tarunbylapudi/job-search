import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { computed } from "vue";

const passRegex = helpers.regex(
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
);

const passRules = computed(() => ({
  Password: {
    required,
    passRegex: helpers.withMessage(
      "Minimum eight characters, at least one upper case letter, one lower case letter, one number and one special character",
      passRegex
    ),
  },
}));
const UsePasswordValidation = () => {
  return passRules;
};

export default UsePasswordValidation;
