<template>
  <div>
    <h1>This is the "Products" page</h1>
    <h2>Content form props: {{ message }}</h2>
    <!-- Renderizado condicional -->
    <div v-if="products && products.length">
      <!-- Recorrer un array (como un .map) -->
      <div v-for="product in products" :key="product.id">
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
      </div>
    </div>

    <button @click="increaseCounter">Add counter</button>
    <p>{{ counter }}</p>
  </div>
</template>

<script>
export default {
  name: "Products",
  data: () => ({
    // Props
    message: "Hola",
    products: [],
    counter: 0
  }),
  // Mehotd that will be executed after creating the component for render.
  created() {
    // Simple GET request using fetch
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(products => (this.products = products)); // actualiza estado con el array de productos
  },
  methods: {
    increaseCounter() {
      this.counter = this.counter + 1;
    }
  }
};
</script>

<style scoped>
h1 {
  font-size: 60px;
}

h2 {
  font-size: 40px;
}
</style>
