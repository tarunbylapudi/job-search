import useVuelidate from "@vuelidate/core";
import { required, helpers } from "@vuelidate/validators";
import { computed } from "vue";

const emailRegex = helpers.regex(
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const emailRules = computed(() => ({
  Email: {
    required,
    emailRegex: helpers.withMessage("Enter a valid Email", emailRegex),
  },
}));

const UseEmailValidation = () => {
  return emailRules;
};

export default UseEmailValidation;
