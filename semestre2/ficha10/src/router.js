import Vue from 'vue'
//import Router from 'vue-router'
import {IonicVueRouter} from '@ionic/vue';
import Home from './views/Home.vue'
import About from './views/About.vue'

//Vue.use(Router)
Vue.use(IonicVueRouter);

export default new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
