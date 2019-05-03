import Vue from 'vue'
//import './plugins/axios'
import App from './App.vue'
import router from './router'
import VueCookies from "vue-cookies"
import axios from 'axios';
Vue.use(VueCookies, axios);

Vue.config.productionTip = false

Vue.config.productionTip = false

new Vue({
  router,
  render: function(h) { return h(App) }
}).$mount('#app')
