/*
 * @Description: 页面快速生成脚本
 * @Date: 2018-12-06 10:28:08
 * @LastEditTime: 2018-12-10 09:43:50
 */
const fs = require('fs')
const path = require('path')
const basePath = path.resolve(__dirname, '../src')

const dirName = process.argv[2]
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1)
if (!dirName) {
  console.log('文件夹名称不能为空！')
  console.log('示例：npm run tep ${capPirName}')
  process.exit(0)
}

/**
 * @msg: vue页面模版
 */
const VueTep = `<template>
  <div class="${dirName}-wrap">
    {{data.pageName}}
  </div>
</template>

<script lang="ts" src="./${dirName}.ts"></script>

<style lang="less">
  @import './${dirName}.less';
</style>

`

// ts 模版
const tsTep = `import { Component, Vue } from "vue-property-decorator"
import { ${capPirName}Data } from '@/types/views/${dirName}.interface.ts'
// import {  } from "@/components" // 组件

@Component({})
export default class ${capPirName} extends Vue {

  // data
  data: ${capPirName}Data = {
    pageName: '${dirName}'
  }

  created() {
    //
  }
    
  activated() {
    //
  }

  mounted() {
    //
  }

  // 初始化函数
  init() {
    //
  }
    
}
`

// less 模版
const lessTep = `

.${dirName}-wrap {
  width: 100%;
}
`

// interface 模版
const interfaceTep = `// ${dirName}.Data 参数类型
export interface ${capPirName}Data {
  pageName: string
}

// VUEX ${dirName}.State 参数类型
export interface ${capPirName}State {
  data?: any
}

// GET_DATA_ASYN 接口参数类型
// export interface DataOptions {}

`

// vuex 模版
const vuexTep = `import { ${capPirName}State } from '@/types/views/${dirName}.interface.ts'
import { GetterTree, MutationTree, ActionTree } from 'vuex'
import * as apiMain from '@/api/apiMain';

const state: ${capPirName}State = {
}

// 强制使用getter获取state
const getters: GetterTree<${capPirName}State, any> = {
}

// 更改state
const mutations: MutationTree<${capPirName}State> = {
  // 更新state都用该方法
 
}

const actions: ActionTree<${capPirName}State, any> = {

}

export default {
  state,
  getters,
  mutations,
  actions
}

`


fs.mkdirSync(`${basePath}/views/${dirName}`) // mkdir

process.chdir(`${basePath}/views/${dirName}`) // cd views
fs.writeFileSync(`${dirName}.vue`, VueTep) // vue 
fs.writeFileSync(`${dirName}.ts`, tsTep) // ts
fs.writeFileSync(`${dirName}.less`, lessTep) // less

process.chdir(`${basePath}/types/views`); // cd types
fs.writeFileSync(`${dirName}.interface.ts`, interfaceTep) // interface

process.chdir(`${basePath}/store/module`); // cd store
fs.writeFileSync(`${dirName}.ts`, vuexTep) // vuex

process.exit(0)