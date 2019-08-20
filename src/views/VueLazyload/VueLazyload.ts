import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { VueLazyloadData } from '@/types/views/VueLazyload.interface.ts'
// import {  } from "@/components" // 组件

@Component({})
export default class VueLazyload extends Vue {
  // Getter
  // @Getter VueLazyload.author
    
  // Action
  // @Action GET_DATA_ASYN

  // data
  data: VueLazyloadData = {
    pageName: 'VueLazyload'
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
