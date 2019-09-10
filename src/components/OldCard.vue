<template>
  <div class="col col-xs-6 col-lg-3">
    <div class="card border-0">
      <img :src="product.image" class="card-img-top" alt="..." />
      <div class="card-body">
        <h6 class="card-title">{{product.title}}</h6>
        <div class="mkc-product-info-list mt-3">
          <div class="mkc-product-description">{{product.description}}</div>
          <span class="mt-1 ante-price">A partir de:</span>
          <h6 class="mkc-price-list">{{product.price}}</h6>
        </div>
        <div class="mkc-card-action-list"></div>
        <div class="card-action">
          <a href="#" class="btn btn-primary btn-compare">Comparar</a>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
export default {
  name: "Card",
  props: {
    product: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.card {
  width: 14rem;
}
.card-action {
  width: 100%;
  text-align: center;
}
.btn-compare {
  border-radius: 50px !important;
  padding: 0.5rem 3rem !important;
  margin: 0px auto;
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
.card-body {
  text-align: center;
}
</style>