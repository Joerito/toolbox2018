import Vue from 'vue'
import 'axios'
import App from './App.vue'
import router from './router'
import VueCookies from "vue-cookies"
import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css';

Vue.use(VueCookies);
Vue.use(Ionic);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h){return h(App)}
}).$mount('#app')
