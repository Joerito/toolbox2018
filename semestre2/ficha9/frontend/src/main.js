import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueCookies from "vue-cookies"
import axios from "axios";

Vue.use(VueCookies)
Vue.use(axios)

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {return h(App)}
}).$mount('#app')
