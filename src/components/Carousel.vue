<template>
  <section class="mt-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-12 order-lg-2">
          <div class="p-5">
            <Title class="mb-3">Produtos mais procurados</Title>
            <div class="bd-example">
              <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="row">
                      <Card v-for="product in products" :product="product" v-bind:key="product.id" />
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="material-icons courousel-arrow courousel-arrow-left"
                  >keyboard_arrow_left</span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleCaptions"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="material-icons courousel-arrow courousel-arrow-right"
                  >keyboard_arrow_right</span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Title from "./Title";
import Card from "./Card";

export default {
  name: "Carousel",
  components: {
    Title,
    Card
  },
  data() {
    return {
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
        }
      ]
    };
  }
};
</script>

<style scoped>
.courousel-arrow-right {
  margin-left: 195px;
}

.courousel-arrow-left {
  margin-right: 195px;
}

.courousel-arrow {
  color: #6610f2;
  font-size: 3rem !important;
}
.brand-color {
  color: #fd7e14;
}
</style>