import { computed } from "vue";
import { useRoute } from "vue-router";

const UseConfirmRoute = (RouteName: string) => {
  const route = useRoute();
  return computed(() => route.name === RouteName);
};

export default UseConfirmRoute;
