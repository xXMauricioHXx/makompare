<template>
  <div class="row mck-bk-ff border p-4">
    <div class="col">
      <div class="container">
        <div class="row">
          <div class="col-md-2 mkc-product-image">
            <img :src="product.imageUrl" />
          </div>
          <div class="col-md-2 mkc-product-image-brand">
            <img :src="product.sallerImage" />
          </div>
          <div class="col-md-2 mkc-prices">
            <span class="mkc-find-by">á vista por:</span>
            <span class="mkc-price-list">{{product.price | currency}}</span>
          </div>
          <div class="col-md-2 mkc-prices">
            <span class="mkc-find-by" v-if="product.installments">
              Em até
              <span style="color: #f42d4b">{{product.installments}}X</span> de
            </span>
            <span class="mkc-price-list" v-if="product.installments">{{product.installmentsPrice | currency}}</span>
          </div>
          <div class="col-md-2 mkc-prices">
            <span class="mkc-find-by">com frete:</span>
            <span class="mkc-price-list" v-if="product.priceWithShipping">{{product.priceWithShipping | currency}}</span>
            <span v-if="!product.priceWithShipping">Não foi possível calcular o frete</span>
          </div>
          <div class="col-md-2 mkc-list-action pt-4 pb-4">
            <ul class="p-0 mt-3">
              <li>
                <a :href="product.link">
                  <i class="material-icons">launch</i> Ir para Loja
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BuyItem",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.mkc-title {
  font-size: 16pt;
}
.mkc-find-in {
  font-size: 11pt;
  font-weight: 600;
  color: black;
  display: block;
}
.mkc-product-image img {
  width: 100%;
  display: block;
}

.mkc-product-image-brand img {
  width: 100%;
  padding: 1rem 0.3rem;
}

.mkc-price-parcela {
  margin: 0.5rem;
}
.mkc-price-parcela span {
  color: #f42d4b;
  font-weight: bold;
}

.mkc-description {
  margin-bottom: 1rem;
}

.mkc-find-by {
  display: block;
  font-weight: 600;
}

.mkc-prices {
  font-size: 10pt;
  padding: 2rem;
}

.mkc-prices .mkc-price-list {
  font-size: 14pt;
}

.mkc-list-action ul li {
  display: inline;
  background-color: #f42d4b;
  padding: 0.5rem 1.2rem;
  font-size: 10pt;
  color: #fff;
  margin-right: 1rem;
  transition: 0.5s;
  -webkit-box-shadow: 0px 5px 4px 0px rgba(168, 168, 168, 1);
  -moz-box-shadow: 0px 5px 4px 0px rgba(168, 168, 168, 1);
  box-shadow: 0px 5px 4px 0px rgba(168, 168, 168, 1);
}

.mkc-list-action ul li a{
  color: #ffff;
  text-decoration: none;
}
.mkc-list-action ul li i {
  vertical-align: text-bottom;
  margin-right: 0.3rem;
  font-size: 14pt;
}

.mkc-list-action ul li:hover {
  background-color: #c7374d;
  cursor: pointer;
}

@media (max-width: 576px) {
  .mkc-list-action ul {
    width: 100%;
  }
  .mkc-list-action ul li{
    display: block;
    padding: 1rem 0px;
    margin-top: 0.5rem;
    text-align: center
  }

  .mkc-prices .mkc-find-by {
    font-size: 1.2rem;
  }
}
</style>