<template>
  <div class="col-xs-12 col-md-6 col-lg-3 mkc-card">
    <div class="mkc-card-btn-compare">Comparar</div>
    <div class="card border-0 mkc-card-content">
      <div class="mkc-favorite">
        <i class="material-icons">favorite_border</i>
      </div>
      <img :src="product.image" class="card-img-top mkc-image-list" alt="..." />
      <div class="card-body">
        <h6 class="card-title">{{product.title}}</h6>
        <div class="mkc-product-info-list">
          <div class="mkc-product-description mt-3">{{product.description}}</div>
          <span class="mt-1 ante-price">A partir de:</span>
          <h6 class="mkc-price-list">{{product.price}}</h6>
        </div>
        <div class="mkc-card-action-list">
          <span>Encontrado em 9 lojas</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardWithoutBtn",
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
  text-align: center;
  position: relative;
}

.mkc-card-content {
  transition: 0.5s;
  position: relative;
}

.mkc-card-content:hover {
  opacity: 0.5;
}

.mkc-card-btn-compare {
  position: absolute;
  right: 30%;
  top: 30%;
  padding: 1rem 3rem;
  font-weight: 700;
  background-color: #33052d;
  color: #ffff;
  z-index: 100000;
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
  width: 100%;
  margin: 0px;
  height: 3rem;
  text-align: center;
  font-weight: 700;
}
.mkc-card-action-list span {
  display: block;
  padding: 0.7rem 0px;
}
.mkc-favorite {
  border: 1px solid #c9c9c9;
  position: absolute;
  padding: 0.7rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  z-index: 10000;
  border-radius: 50%;
}

.mkc-favorite:hover {
  opacity: 0.5;
  cursor: pointer;
}

@media (min-width: 576px) {
}

/* // Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... } */
</style>