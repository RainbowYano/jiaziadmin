import Layout from "../views/layout/index.vue";
export function formatRoutesByComponentPath(routes) {
  routes.forEach(route => {
    if (route.component === "layout") {
      route.component = Layout;
    } else {
      // console.log("@/views/" + route.component + "\.vue")
      route.component = () => import("@/views/" + route.component);
    }

    if (route.children) {
      formatRoutesByComponentPath(route.children);
    }
  });

  // rawRoutes.forEach(route => {
  //   if (route.component === "layout") {
  //   } else {
  //     route.component = () => import(`@/views/${route.component}.vue`);
  //   }
  //   if (route.children) {
  //     formatRoutesByComponentPath(route.children);
  //   }
  // });
}
