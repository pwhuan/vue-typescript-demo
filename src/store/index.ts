import Vue from 'vue';
import Vuex from 'vuex';

import HelloWorld from './module/helloWorld';
import login from './module/login';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
    },
    mutations: {
        //
    },
    actions: {
        //
    },
    modules: {
        HelloWorld,
        login,
    }
});
