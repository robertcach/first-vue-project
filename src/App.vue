<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <Menu />
    <router-view />
    <!-- Inserta diferentes vistas en función de las rutas -->
  </div>
</template>

<script>
import Menu from "@/components/Menu/Menu";

export default {
  name: "App",
  components: { Menu }
};
</script>

<!-- <style lang="scss" scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style> -->
