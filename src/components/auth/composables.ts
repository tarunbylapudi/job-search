import { useRouter } from "vue-router";
export const autoLoginCheck = () => {
  const router = useRouter();
  if (!localStorage.getItem("token")) {
    router.push({ path: "/login" });
  } else {
    router.push({ path: "/" });
  }
};
