<template>
  <div>
    <Menu />
    <section class="mkc-bk-f2 pt-6">
      <div class="container pb-5">
        <BuyBox :product="buyBoxItem" />
        <BuyItem v-for="item in buyItems" :product="item" v-bind:key="item.id" />
      </div>
    </section>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import BuyBox from "../components/BuyBox";
import BuyItem from "../components/BuyItem";

export default {
  name: "ProductDetail",
  components: {
    Menu,
    BuyBox,
    BuyItem
  },
  mounted() {
    this.buyBoxItem = this.products[0];
    this.products.shift();
    this.buyItems = this.products;
  },
  data() {
    return {
      buyBoxItem: {},
      buyItems: [],
      products: [
        {
          id: 1,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000",
          installments: 5,
          installmentsPrice: "R$ 55,00",
          foundIn: 9,
          priceWithShipping: "R$ 135,00",
          brandImage: "https://staticz.com.br/img/logos/epoca-cosmeticos.png"
        },
        {
          id: 2,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000",
          installments: 5,
          installmentsPrice: "R$ 55,00",
          foundIn: 9,
          priceWithShipping: "R$ 135,00",
          brandImage: "https://staticz.com.br/img/logos/epoca-cosmeticos.png"
        },
        {
          id: 3,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000",
          installments: 5,
          installmentsPrice: "R$ 55,00",
          foundIn: 9,
          priceWithShipping: "R$ 135,00",
          brandImage: "https://staticz.com.br/img/logos/epoca-cosmeticos.png"
        },
        {
          id: 4,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000",
          installments: 5,
          installmentsPrice: "R$ 55,00",
          foundIn: 9,
          priceWithShipping: "R$ 135,00",
          brandImage: "https://staticz.com.br/img/logos/epoca-cosmeticos.png"
        },
        {
          id: 5,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000",
          installments: 5,
          installmentsPrice: "R$ 55,00",
          foundIn: 9,
          priceWithShipping: "R$ 135,00",
          brandImage: "https://staticz.com.br/img/logos/epoca-cosmeticos.png"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>