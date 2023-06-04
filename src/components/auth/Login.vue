<!-- eslint-disable vue/no-side-effects-in-computed-properties -->
<template>
  <div class="container">
    <div class="card">
      <div class="card-header">
        <h5 class="text-2xl font-bold pt-3.5 pb-2">Sign In</h5>
      </div>

      <div class="card-body">
        <div class="flex flex-col">
          <Input
            v-model="Email"
            :config="emailConfig"
            :error="emailv$"
            @input="emailValidator"
          />
        </div>
        <div class="flex flex-col mt-2">
          <Input
            v-model="Password"
            :config="passwordConfig"
            :error="passv$"
            @input="passwordValidator"
          />
        </div>
        <!-- <button>Sign In</button> -->
        <p v-if="authError" class="text-rose-600 mt-2">{{ authError }}</p>
        <action-button
          text="Sign In"
          type="primary"
          class="mt-5"
          @click="authenticateUser"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { key } from "@/store";
import { AuthenticationDetails } from "@/api/types";
import { UPDATE_CREDENTIALS, LOGIN_LOGOUT_USER } from "@/store/constants";
import { defineComponent, ref } from "vue";
import { useFetchAuthData } from "@/store/composables";
import ActionButton from "../shared/ActionButton.vue";

import { useVuelidate } from "@vuelidate/core";

import UseEmailValidation from "@/utils/Validation/UseEmailValidation";
import UsePasswordValidation from "@/utils/Validation/UsePasswordValidation";

import Input from "./Input.vue";

export default defineComponent({
  name: "Login",
  components: { Input, ActionButton },
  setup() {
    const store = useStore(key);
    const router = useRouter();
    const Email = ref("");
    const Password = ref("");
    const authError = ref("");

    onMounted(useFetchAuthData);

    const emailConfig = ref({
      type: "text",
      label: "Email",
      placeholder: "abc@abc.com",
    });

    const passwordConfig = ref({
      type: "password",
      label: "Password",
      placeholder: "Enter ur password",
    });

    const emailv$ = useVuelidate(UseEmailValidation(), { Email });
    const passv$ = useVuelidate(UsePasswordValidation(), { Password });

    const emailValidator = () => {
      emailv$.value.$validate();
    };

    const passwordValidator = () => {
      passv$.value.$validate();
    };

    const authenticateUser = () => {
      if (Email.value === "" || Password.value === "") {
        authError.value = "Please enter all the feilds";
      } else {
        store.commit(UPDATE_CREDENTIALS, {
          email: Email.value,
          password: Password.value,
        });

        const authenticationDetails: AuthenticationDetails =
          store.getters.AUTHENTICATION;
        console.log(authenticationDetails);
        if (authenticationDetails.Authentication === "success") {
          store.commit(LOGIN_LOGOUT_USER, true);
          localStorage.setItem("token", authenticationDetails.token);

          console.log(store.state.isLoggedIn);
          router.push({ name: "Home" });
        } else {
          Email.value = "";
          Password.value = "";
          authError.value = authenticationDetails.error;
          // console.log(authError.value);
          // console.log(authenticationDetails);
        }
      }
    };

    return {
      emailConfig,
      passwordConfig,
      Email,
      Password,
      emailv$,
      passv$,
      emailValidator,
      passwordValidator,
      authenticateUser,
      authError,
    };
  },
});
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 100%;
  height: 32.3rem;
}
.card {
  display: flex;
  flex-direction: column;
  width: 30%;

  border: 1px solid black;
  background-color: rgb(250, 249, 249);
  border-radius: 0.4rem;
}

.card:hover {
  @apply shadow-2xl;
}
.card-header {
  display: flex;
  align-items: center;
  justify-content: center;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem 2rem 2rem;
}
button {
  padding: 0.6rem 0.8rem;
  font-weight: 500;
  border-width: 0px;
  color: white;
  background-color: #1967d2;
  border-radius: 3px;
  cursor: pointer;

  /* // @apply text-white bg-brand-blue-1 hover:shadow-blue rounded; */
}
</style>
