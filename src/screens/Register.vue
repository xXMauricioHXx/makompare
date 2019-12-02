<template>
  <div>
    <Menu />
    <div class="container-fluid mt-6">
      <div class="row">
        <div class="col-12">
          <form>
            <div class="form-group row">
              <div class="col-xs-12 col-md-6">
                <label for="name">Nome Completo</label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="col-xs-12 col-md-6">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" />
              </div>
            </div>
            <div class="form-group row">
              <div class="col-xs-12 col-md-6">
                <label for="senha">Senha</label>
                <input type="text" class="form-control" id="senha" />
              </div>
              <div class="col-xs-12 col-md-6">
                <label for="cep">CEP</label>
                <input type="email" class="form-control" id="cep" />
              </div>
            </div>
            <div class="form-group row">            
            <div class="col-xs-12 col-md-12 col-lg-6">
              <span class="btn-mkc-register" v-on:click="submit">Cadatrar</span>
            </div>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu";
export default {
  name: "Register",
  components: {
    Menu
  },
  methods: {
    submit() {
      this.$router.push('/')
    }
  }
};
</script>

<style scoped>
form {
  width: 40%;
  border: 1px solid #f5f5f5;
  border-radius: 1rem;
  padding: 3rem;
  margin: 3rem auto;
}
.btn-mkc-register {
  margin-top: 1rem;
  background-color: #dedede;
  text-align: center;
  padding: .5rem 3rem;
  font-weight: 700;
  text-align: center;

  display: inline-block;  
  background-color: #f42d4b;
  color: white;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  transition: 0.5s;  
}
@media (max-width: 576px) {
  form {
    width: 100%;
  }
  span {
    width: 100%;
  }
}
@media (min-width: 576px) and (max-width: 768px) {
  form {
    width: 80%;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  form {
    width: 60%;
  }
}
</style>
