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
    login(state, params) {
        // state.userInfo = userInfo.data.data.list;
    }
};

const actions: ActionTree<any, any> = {

    async loginAct(context, params) {
        let userInfo = await apiMain.login(params);
        if (userInfo.status === 200) {
            return Promise.resolve(userInfo.data);
        }else{
            
        }

        // context.commit("login", params);
    }
};



export default {
    state,
    getters,
    mutations,
    actions
};
