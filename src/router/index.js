import Vue from "vue";
import Router from "vue-router";
// webpack viene configurado para que el @ haga referencia a la carpeta src
import Home from "@/views/Home/Home";
import Products from "@/views/Products/Products";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/products",
      name: "Products",
      component: Products
    }
  ]
});
