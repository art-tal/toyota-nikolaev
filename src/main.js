import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'
import Inputmask from "inputmask"
import store from "./store/store"
import router from './router/index'
import App from './App.vue'
// import VueCarousel from 'vue-carousel';



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export const eventEmitter = new Vue();

// let inputmask = require('inputmask');

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(Inputmask);


Vue.config.productionTip = false;

new Vue({

  store,
  router,
  render: h => h(App),
}).$mount('#app')
