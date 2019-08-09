import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import qs from 'QS';
// Vue.prototype.QS = qs;

import Antd from 'ant-design-vue';
Vue.use(Antd);

Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');


// declare module 'vue/types/vue' {
//   interface Vue {
//     QS: any
//   }
// }

