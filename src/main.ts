import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';
// import qs from 'QS';
// Vue.prototype.QS = qs;

import Antd from 'ant-design-vue';
Vue.use(Antd);

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zhCN');

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

