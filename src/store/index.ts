import Vue from 'vue';
import Vuex from 'vuex';

import HelloWorld from './module/helloWorld';
import qs from "QS";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        qs
    },
    mutations: {
        //
    },
    actions: {
        //
    },
    modules: {
        HelloWorld,
    }
});
