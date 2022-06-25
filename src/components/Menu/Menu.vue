<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/products">Products</router-link>
  </nav>
</template>

<script>
export default {
  name: "menuApp"
};
</script>

<style>
nav {
  background-color: black;
  padding: 5px 0;
}

a {
  color: white;
  text-decoration: none;
}
</style>
