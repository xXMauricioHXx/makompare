import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueWindowSize from "vue-window-size";
import "./pipes";

Vue.use(VueWindowSize);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
