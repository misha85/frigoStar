// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import router from './router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import App from './App';

Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

export const eventBus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
