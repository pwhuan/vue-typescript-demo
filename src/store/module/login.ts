import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as apiMain from '@/api/apiMain';

const state: any = {
    userInfo: {}
};

// 强制使用getter获取state
const getters: GetterTree<any, any> = {

};

// 更改state
const mutations: MutationTree<any> = {
};

const actions: ActionTree<any, any> = {

};



export default {
    state,
    getters,
    mutations,
    actions
};
