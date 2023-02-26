import {
  createRouter,
  createWebHistory
} from "vue-router";

import IndexView from "../views/IndexView.vue";
import PostView from "../views/PostView.vue";
import TeamView from "../views/TeamView.vue";

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  routes: [{
      path: "/",
      name: "index",
      component: IndexView,
    },
    {
      path: "/post:slug_title",
      name: "post",
      component: PostView,
      props: true,
    },
    {
      path: "/team",
      name: "team",
      component: TeamView,
    },
  ],

  linkExactActiveClass: "menu-item--active",
  linkActiveClass: "",
});

export default router;