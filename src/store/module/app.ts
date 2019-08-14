import { GetterTree, MutationTree, ActionTree } from 'vuex';

const breadcrumb: Breadcrumbs[] = [];

// 强制使用getter获取state
const getters: GetterTree<Breadcrumbs, any> = {

};

// 更改state
const mutations: MutationTree<Breadcrumbs> = {
    routeChange: (state, params) => {
        console.log(state, params);
        // breadcrumb.push();
    },
};

const actions: ActionTree<Breadcrumbs, any> = {
    routeChangeAction(context, params) {
        context.commit("routeChange", params);
    },
};


export default {
    breadcrumb,
    getters,
    mutations,
    actions
};

interface Breadcrumbs {
    name: string,
    route: string
}
