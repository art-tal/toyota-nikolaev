import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "./store/store"
// import VueCarousel from 'vue-carousel';



import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export const eventEmitter = new Vue();

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueRouter);
Vue.use(VueAxios, axios);
// Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({

  store,
  router,
  render: h => h(App),
}).$mount('#app')
