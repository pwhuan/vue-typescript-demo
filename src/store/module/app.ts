import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as apiMain from '@/api/apiMain';
import { MenuItem } from '@/utils/SiderItem';
console.log(apiMain);

const menus: MenuItem = {
    name : '',
    permissionName: '',
    icon: '',
    route: '',
    items: []
};

// 强制使用getter获取state
const getters: GetterTree<MenuItem, any> = {

};

// 更改state
const mutations: MutationTree<MenuItem> = {

};

const actions: ActionTree<MenuItem, any> = {

};


export default {
    menus,
    getters,
    mutations,
    actions
};
