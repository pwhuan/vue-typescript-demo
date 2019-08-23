import Vue from 'vue';
import Vuex from 'vuex';

import HelloWorld from './module/helloWorld';
import login from './module/login';
import roles from './module/roles';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        loading: false,
        token: undefined
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
        roles
    }
});
