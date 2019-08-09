import { GetterTree, MutationTree, ActionTree } from 'vuex';
import * as apiMain from '@/api/apiMain';
import QS from 'QS';
console.log(apiMain);

const state: HelleWorldData = {
    count: 0
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
    getAllGoodsList() {
        let params = {
            pageNum: 1
        };
        let allGoodsList = apiMain.getAllGoodsList(QS.stringify(params));
        console.log(allGoodsList);
    }
};

const actions: ActionTree<HelleWorldData, any> = {
    addFun(context) {
        context.commit("add");
    },
    reductionFun(context) {
        context.commit("reduction");
    },
    getAllGoodsListAct(context) {
        context.commit("getAllGoodsList");
    }
};

interface HelleWorldData {
    count: number
}

export default {
    state,
    getters,
    mutations,
    actions
};
