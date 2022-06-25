<template>
  <div class="product-card">
    <img class="image" :src="image" />
    <h3 class="title">{{ title }}</h3>
  </div>
</template>

<script>
export default {
  name: "ProductCard",
  props: {
    title: String,
    image: String
  }
};
</script>

<style>
.product-card {
  width: 20%;
  padding: 0 2.5%;
  margin: 50px 0;
}

.image {
  text-align: center;
  height: 250px;
  object-fit: contain;
}
</style>
