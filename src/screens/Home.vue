<template>
  <div>
    <Menu />
    <Banner />
    <Carousel :products="products" />
  </div>
</template>
<script>
import { searchProducts } from "../services/makompare";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Carousel from "../components/Carousel";

export default {
  name: "Home",
  components: {
    Menu,
    Banner,
    Carousel
  },
  data() {
    return {
      products: []
    };
  },
  async mounted() {
    this.products = await searchProducts("batom");
    this.products = this.products.slice(0, 4);
  }
};
</script>