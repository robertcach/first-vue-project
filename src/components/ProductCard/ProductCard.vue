<template>
  <div>
    <p>{{ title }}</p>
    <img :src="image" />
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
