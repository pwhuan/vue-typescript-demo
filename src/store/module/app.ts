import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as apiMain from '@/api/apiMain';
console.log(apiMain);

const menus: IMenuItem = {
    name: '111',
    items: []
};

// 强制使用getter获取state
const getters: GetterTree<IMenuItem, any> = {

};

// 更改state
const mutations: MutationTree<IMenuItem> = {

};

const actions: ActionTree<IMenuItem, any> = {

};


export default {
    menus,
    getters,
    mutations,
    actions
};
