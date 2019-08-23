import { RolesState } from '@/types/views/roles.interface.ts'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as apiMain from '@/api/apiMain';

const state: RolesState = {
}

// 强制使用getter获取state
const getters: GetterTree<RolesState, any> = {
}

// 更改state
const mutations: MutationTree<RolesState> = {
  // 更新state都用该方法

}

const actions: ActionTree<RolesState, any> = {
}

export default {
  state,
  getters,
  mutations,
  actions
}

