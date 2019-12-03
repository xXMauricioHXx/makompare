<template>
  <div>
    <Menu />
    <section class="mkc-bk-f2 pt-6 mck-container">
      <div class="container pb-5">
        <BuyBox :product="buyBoxItem" />
        <BuyItem v-for="item in buyItems" :product="item" v-bind:key="item.id" />
      </div>
    </section>
    <Loader :loading="loading" />
  </div>
</template>

<script>
import { searchProductById } from "../services/makompare";
import Menu from "../components/Menu";
import BuyBox from "../components/BuyBox";
import BuyItem from "../components/BuyItem";
import Loader from "../components/Loader";

export default {
  name: "ProductDetail",
  components: {
    Menu,
    BuyBox,
    BuyItem,
    Loader
  },
  async mounted() {
    const id = this.$route.params.id;
    this.products = await searchProductById(id);
    this.loading = false;
    this.buyBoxItem = {
      imageUrl: this.products[0].image,
      price: this.products[0].price,
      description: this.products[0].description,
      name: this.products[0].title,
      installments: this.products[0].installments,
      installmentsPrice: this.products[0].installmentsPrice,
      priceWithShipping: this.products[0].priceWithShipping
      
    };
    this.buyItems = this.products[0].companies;
  },
  data() {
    return {
      buyBoxItem: {},
      buyItems: [],
      products: [],
      loading: true
    };
  }
};
</script>

<style scoped>
.mck-container {
  height: 100vh;
}
</style>