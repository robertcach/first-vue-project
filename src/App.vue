<template>
  <div id="app">
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

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
