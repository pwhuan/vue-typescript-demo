import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'ant-design-vue/dist/antd.css';
import './assets/common.less';
import qs from 'qs';
Vue.prototype.QS = qs;

import Antd from 'ant-design-vue';
Vue.use(Antd);

import moment from 'moment';
import 'moment/locale/zh-cn';
moment.locale('zhCN');



Vue.prototype.$moment = moment;

Vue.config.productionTip = false;

import VueLazyLoad from 'vue-lazyload'
Vue.use(VueLazyLoad, {
  error: require('./assets/21.jpg'),
  loading: require('./assets/1.gif')
})

import * as apiMain from '@/api/apiMain';

Vue.prototype.$http = apiMain;


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');




declare module 'vue/types/vue' {
  interface Vue {
    QS: any,
    $moment: any,
    $http: any
  }
}

