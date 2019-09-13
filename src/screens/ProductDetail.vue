<template>
  <div>
    <Menu />
    <section class="mt-6">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="container">
              <div class="row">
                <div class="col-md-3 mkc-product-image">
                  <img
                    src="https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
                  />
                </div>
                <div class="col-md-9">
                  <div class="container-fluid">
                    <div class="row">
                      <div class="col-12">
                        <Title class="mkc-title">SMASHBOX</Title>
                      </div>
                      <div class="col-12 mkc-description">
                        Descrição
                        Always On Liquid é um batom líquido de Smashbox de acabamento matte. Colore os lábios com alta pigmentação e poder de cobertura.
                      </div>
                      <div class="col-12">
                        <span class="mkc-find-in">A partir de:</span>
                        <span class="mkc-price-list">R$ 125,00</span>
                        <span class="mkc-price-parcela">
                          Ou
                          <span>5x R$ 55,00</span> em
                          <span>9 lojas</span>
                        </span>
                      </div>
                      <div class="col-12">
                        <div class="mkc-list-action">
                          <ul class="p-0 mt-3">
                            <li>
                              <i class="material-icons">launch</i> Ir para Loja
                            </li>
                            <li>
                              <i class="material-icons">add_alert</i> Alerta de preço
                            </li>
                            <li>
                              <i class="material-icons">trending_up</i>
                              Acompanhar Grafico
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row border mt-3">
                <div class="col-12">
                  <div class="row">
                    <div class="col-md-2 mkc-product-image">
                      <img
                        src="https://epocacosmeticos.vteximg.com.br/arquivos/ids/327787-300-300/big-spender.jpg?v=636886750756870000"
                      />
                    </div>
                    <div class="col-md-2 mkc-product-image-brand">
                      <img src="https://staticz.com.br/img/logos/epoca-cosmeticos.png" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Menu from "../components/Menu";
import Title from "../components/Title";

export default {
  name: "ProductDetail",
  components: {
    Menu,
    Title
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
  width: 80%;
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

.mkc-list-action ul li i {
  vertical-align: text-bottom;
  margin-right: 0.3rem;
  font-size: 14pt;
}

.mkc-list-action ul li:hover {
  background-color: #c7374d;
  cursor: pointer;
}
</style>