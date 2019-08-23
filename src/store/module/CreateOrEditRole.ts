import { CreateOrEditRoleState } from '@/types/views/CreateOrEditRole.interface.ts'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as apiMain from '@/api/apiMain';

const state: CreateOrEditRoleState = {
}

// 强制使用getter获取state
const getters: GetterTree<CreateOrEditRoleState, any> = {
}

// 更改state
const mutations: MutationTree<CreateOrEditRoleState> = {
  // 更新state都用该方法
 
}

const actions: ActionTree<CreateOrEditRoleState, any> = {

}

export default {
  state,
  getters,
  mutations,
  actions
}

