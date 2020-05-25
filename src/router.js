import Vue from "vue";
import Router from "vue-router";
import stuList from "./views/stuList.vue";
import addStu from "./views/addStu.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: '/stuList'
    },
    {
      path: "/stuList",
      name: "stuList",
      component: stuList
    },
    {
      path: "/addStu",
      name: "addStu",
      component: addStu
    }
  ],
  linkExactActiveClass: 'menu-active'
});
