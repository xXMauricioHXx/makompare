<template>
  <header class="masthead text-center text-white">
    <div class="masthead-content">
      <div class="container">
        <Title class="mb-0">Procure. Compare. Compre.</Title>
        <AutoComplete link="/product-list?product" :search="search"></AutoComplete>
        <!--<a href="#" class="btn btn-primary btn-xl rounded-pill mt-5">Learn More</a>-->
      </div>
    </div>
    <div class="bg-circle-1 bg-circle"></div>
    <div class="bg-circle-2 bg-circle"></div>
    <div class="bg-circle-3 bg-circle"></div>
    <div class="bg-circle-4 bg-circle"></div>
  </header>
</template>

<script>
import Title from "./Title";
import AutoComplete from "./AutoComplete";
import { searchProducts } from "../services/makompare";

export default {
  name: "Banner",
  components: {
    Title,
    AutoComplete
  },
  data() {
    return {
      product: "",
      products: ["Batom", "Pó"]
    };
  },
  methods: {
    search: async input => {
      // console.log(input);
      // if (input.length < 1) {
      //   return [];
      // }

      // const products = await searchProducts(input);
      // return products.map(product => product.name);
      return [
        "Batom 1",
        "Batom 2",
        "Batom 3",
        "Batom 4",
        "Batom 5",
        "Batom 6",
        "Batom 7",
        "Batom 8"
      ];
    },
    handleSubmit(result) {
      console.log(result);
    }
  }
};
</script>

<style scoped>
header {
  height: 100vh;
}
</style>