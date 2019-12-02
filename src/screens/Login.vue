<template>
  <div>
    <Menu />
    <div class="container-fluid mt-6">
      <div class="row">
        <div class="col-12">
          <form>
            <div class="form-group">
              <label for="email">Email</label>
              <input
                type="email"
                class="form-control"
                id="email"
                
              />              
            </div>
            <div class="form-group">
              <label for="senha">Senha</label>
              <input
                type="password"
                class="form-control"
                id="senha"
              />
            </div>            
            <div class="row">
              <div class="col-xs-12 col-md-6">
                <span class="btn-mkc-register">Logar</span>
              </div>
              <div class="col-xs-12 col-md-6">
                <router-link to="/register" class="fr btn-mkc-register">Cadastre-se</router-link>
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
  name: "Login",
  components: {
    Menu
  }
};
</script>

<style scoped>
form {
  width: 40%;
  border: 1px solid #F5F5F5;
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
.fr {
  float: right;
}

@media (max-width: 576px) {
  form { 
    width: 100%;
  }
  span { 
    width: 100%;
  }

}
@media (min-width: 576px) and (max-width:768px) {
  form { 
    width: 80%;
  }
}
@media (min-width: 768px) and (max-width:1024px) {
  form { 
    width: 60%;
  }
}
</style>
