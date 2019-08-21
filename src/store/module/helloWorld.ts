import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as apiMain from '@/api/apiMain';

const state: HelleWorldData = {
    count: 0,
    allGoodsList: {}
};

// 强制使用getter获取state
const getters: GetterTree<HelleWorldData, any> = {
    getCount: (state) => {
        return state.count + 1;
    }
};

// 更改state
const mutations: MutationTree<HelleWorldData> = {
    add: (state) => {
        state.count = state.count + 1;
    },
    reduction: (state) => {
        state.count = state.count - 1;
    },
    async getAllGoodsList(state, params) {
        let allGoodsList = await apiMain.getAllGoodsList(params);
        state.allGoodsList = allGoodsList.data.data.list;
    }
};

const actions: ActionTree<HelleWorldData, any> = {
    addFun(context) {
        context.commit("add");
    },
    reductionFun(context) {
        context.commit("reduction");
    },
    getAllGoodsListAct(context, params) {
        context.commit("getAllGoodsList", params);
    }
};

interface HelleWorldData {
    count: number,
    allGoodsList: object
}

export default {
    state,
    getters,
    mutations,
    actions
};
