import { Component, Vue } from "vue-property-decorator"
import { Getter, Action, State } from "vuex-class"
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
  @State HelloWorld: any;

  created() {
    //
  }

  activated() {
    //
  }

  mounted() {
    let params = {
      pageNum: 1
    };
    this.$store.dispatch("getAllGoodsListAct", params);
  }

  // 初始化函数
  init() {
    //
  }

}
