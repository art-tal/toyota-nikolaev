import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueRouter);
Vue.use(VueAxios, axios);


Vue.config.productionTip = false

new Vue({

  router,
  render: h => h(App),
}).$mount('#app')
