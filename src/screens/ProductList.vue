<template>
  <div>
    <Menu />
    <section class="mt-6 product-container">
      <div class="container-fluid p-0">
        <div class="row mkc-product-list">
          <div class="col-12" v-if="isMobile">
            <div class="mck-filters-btn" @click="openFilter"><span>Filtros</span></div>
          </div>
          <div class="col d-md-block col-md-4 col-lg-2 mkc-filter-list pl-0" :class="{'mobile-fitler': isMobile, 'show': openMobileFilter}">
            <div v-if="isMobile" class="mck-filters-btn mb-4" @click="openFilter"><span>Filtrar</span></div>
            <h5>Marca</h5>
            <ul>
              <li v-for="brand in catalog.brands" :key="brand">
                <Radio :label="brand" :filter="filterBrands" />
              </li>
            </ul>

            <h5>Preço</h5>
            <ul>
              <li v-for="price in catalog.rangePrice" :key="price.label">
                <Radio :label="price.label" :filter="filterPrice" />
              </li>
            </ul>
          </div>
          <div class="col col-xs-12 col-md-8 col-lg-10 pl-0 pr-0">
            <Title class="capitalize m-3">{{title}}</Title>
            <div class="row">
              <Card v-for="product in products" :product="product" v-bind:key="product.id" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <Loader :loading="loading" />
  </div>
</template>

<script>
import { searchProducts } from "../services/makompare";
import Menu from "../components/Menu.vue";
import Title from "../components/Title";
import Card from "../components/Card";
import Radio from "../components/Radio";
import Loader from "../components/Loader";

export default {
  name: "ProductList",
  components: {
    Menu,
    Title,
    Card,
    Radio,
    Loader
  },
  data() {
    return {
      title: this.$route.query.product,
      isMobile: false,
      catalog: {
        brands: [],
        rangePrice: [
          {
            label: "Até R$ 5,00",
            max: 5,
            min: 0
          },
          {
            label: "De R$ 5,00 á R$ 20,00",
            max: 20,
            min: 5
          },
          {
            label: "De R$ 20,00 á R$ 50,00",
            max: 50,
            min: 20,
          }, 
          {
            label: "Acima de R$ 50,00",
            max: 10000000,
            min: 50
          }
        ]
      },
      openMobileFilter: false,
      loading: true,
      allProducts: [],
      products: [],
      brandTofilter: [],
      pricesToFilter: []
    };
  },
  async mounted() {
    if(this.windowWidth <= 425) {
      this.isMobile = true;
    }
    const product = this.$route.query.product;
    this.products = await searchProducts(product);
    this.catalog.brands = [...new Set(this.products.map(product => product.brand))];
    this.allProducts = this.products;
    this.loading = false;
  },
  methods: {
    filterBrands(brand) {
      if (this.brandTofilter.includes(brand)) {
        this.brandTofilter = this.brandTofilter.filter(brands => {
          return brands != brand;
        });
      } else {
        this.brandTofilter.push(brand);
      }

      if (this.brandTofilter.length) {
        this.products = this.allProducts.filter(product => {
          return this.brandTofilter.includes(product.brand);
        });
      } else {
        this.products = this.allProducts;
      }
    },
    filterPrice(price) {
      const currentPrice = this.catalog.rangePrice.find(rangePrice => rangePrice.label === price)
      if (this.pricesToFilter.includes(currentPrice.label)) {
        this.pricesToFilter = this.pricesToFilter.filter(pricesToFilter => {
          return pricesToFilter !== currentPrice.label;
        });
      } else {
        this.pricesToFilter.push(currentPrice.label);
      }

      if (this.pricesToFilter.length) {
        let products = [];
        this.pricesToFilter.forEach(price => {
          const currentPrice = this.catalog.rangePrice.find(rangePrice => rangePrice.label === price)
          products = [
            ...products,
            ...this.allProducts.filter(product => {
            return product.price >= currentPrice.min && product.price <= currentPrice.max;
            })
          ];
        });
        this.products = products;
      } else {
        this.products = this.allProducts;
      }
    },
    openFilter() {
      this.openMobileFilter = this.openMobileFilter ? false: true;
    }
  }
};
</script>

<style scoped>
.capitalize {
  text-transform: capitalize;
}

.mt-6 {
  margin-top: 4rem;
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
  background-color: #f2f2f2;
}

.mkc-filter-list {
  background-color: #f2f2f2;
  padding: 2rem !important;
  min-height: 100vh;
}

.mck-filters-btn span {
  display: block;
  width: 100%;
  color: #ffff;
  padding: 0.7rem 0px;
  text-align: center;
  margin-top: 1rem;
  font-weight: 400;
  text-transform: uppercase;
  background-color: #f42d4b;
  box-shadow: 0px 5px 4px 0px rgba(168, 168, 168, 1);
}
.mobile-fitler {
  position: absolute;
  z-index: 100000;
  left: -422px;
  top: 72px;
  transition: 1s;
}

.show {
  left: 0px;
  top: 72px;
}
</style>