import { computed } from "vue";
import { useRoute } from "vue-router";

const UseConfirmRoute = (RouteName) => {
  const route = useRoute();
  return computed(() => route.name === RouteName);
};

export default UseConfirmRoute;
