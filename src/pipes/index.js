import Vue from "vue";

Vue.filter("currency", value => {
  
  return value && value.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'});
});

export default Vue;