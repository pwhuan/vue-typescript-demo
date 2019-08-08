import { GetterTree, MutationTree, ActionTree } from 'vuex';

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
    }
};

const actions: ActionTree<HelleWorldData, any> = {
    addFun(context) {
        context.commit("add");
    },
    reductionFun(context) {
        context.commit("reduction");
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
