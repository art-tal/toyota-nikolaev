import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueMeta from 'vue-meta'
import Inputmask from "inputmask"
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import store from "./store/store"
import router from './router/index'
import App from './App.vue'

// import "@babel/polyfill";


import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export const eventEmitter = new Vue();

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(Vuelidate);
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
});
Vue.use(Inputmask);
Vue.use(VueAwesomeSwiper);


Vue.config.productionTip = false;



new Vue({

  store,
  router,
  render: h => h(App),
}).$mount('#app')
