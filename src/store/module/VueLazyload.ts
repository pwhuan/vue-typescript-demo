import { VueLazyloadState } from '@/types/views/VueLazyload.interface.ts'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as apiMain from '@/api/apiMain';

const state: VueLazyloadState = {
}

// 强制使用getter获取state
const getters: GetterTree<VueLazyloadState, any> = {
}

// 更改state
const mutations: MutationTree<VueLazyloadState> = {
  // 更新state都用该方法
 
}

const actions: ActionTree<VueLazyloadState, any> = {

}

export default {
  state,
  getters,
  mutations,
  actions
}

