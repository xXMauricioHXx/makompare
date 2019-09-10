<template>
  <div>
    <Menu />
    <section class="mt-6 product-container">
      <div class="container-fluid">
        <div class="row mkc-product-list">
          <div class="col d-none d-sm-block col-md-2">
            <h5>Marca</h5>
            <ul>
              <li v-for="brand in catalog.brands" :key="brand" v-on:click="checked">
                <Radio :label="brand" />
              </li>
            </ul>
            <h5>Efeito</h5>
            <ul>
              <li v-for="effect in catalog.effects" :key="effect">
                <Radio :label="effect" />
              </li>
            </ul>
            <h5>Preço</h5>
            <ul>
              <li v-for="price in catalog.rangePrice" :key="price">
                <Radio :label="price" />
              </li>
            </ul>
          </div>
          <div class="col col-xs-12 col-md-10 col-lg-10 pl-0 pr-0">
            <Title class="capitalize">{{title}}</Title>
            <div class="row">
              <Card v-for="product in products" :product="product" v-bind:key="product.id" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Title from "../components/Title";
import Card from "../components/Card";
import Radio from "../components/Radio";

export default {
  name: "ProductList",
  components: {
    Menu,
    Title,
    Card,
    Radio
  },
  methods: {
    checked() {}
  },
  data() {
    return {
      title: this.$route.query.product,
      catalog: {
        effects: ["Matte", "Brilho", "Tradicional"],
        brands: ["MAC", "Eudora", "Vult", "Natura Una", "Dior"],
        rangePrice: [
          "Até R$ 5,00",
          "De R$ 5,00 á R$ 20,00",
          "De R$ 20,00 á R$ 50,00",
          "Acima de R$ 50,00"
        ]
      },
      products: [
        {
          id: 1,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 2,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 3,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 4,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 5,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 6,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 7,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 8,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 9,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 10,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 11,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        },
        {
          id: 12,
          title: "SMASHBOX",
          description: "Batom Líquido Smashbox - Always On",
          price: "R$ 125,00",
          image:
            "https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
        }
      ]
    };
  }
};
</script>

<style scoped>
.capitalize {
  text-transform: capitalize;
}
.product-container {
  margin-bottom: 15rem;
}

.mt-6 {
  margin-top: 6rem;
}

.mkc-image-list {
  width: 60%;
  display: block;
  margin: 1rem auto;
}

.mkc-product-list {
  padding: 0px;
  margin: 0px;
}

.mkc-product-list div ul li {
  display: inline;
}
.mkc-product-info-list .ante-price {
  font-size: 1.3rem;
  font-weight: 900;
  display: block;
}

.mkc-product-description {
  font-size: 0.9rem;
}

.mkc-price-list {
  font-weight: 900;
  font-size: 1.7rem;
  color: #33052d;
  font-family: "Lato";
}

.mkc-product-info-list .ante-price {
  font-size: 0.8rem;
}

.mkc-card-action-list {
  background-color: #dedede;
}
</style>