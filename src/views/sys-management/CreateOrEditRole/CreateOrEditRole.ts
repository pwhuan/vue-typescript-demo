import { Component, Vue } from "vue-property-decorator"
import { CreateOrEditRoleData } from '@/types/views/CreateOrEditRole.interface.ts'
// import {  } from "@/components" // 组件
const menus = [{ label: 'Apple', value: 1 }, { label: 'Apple', value: 2 }, { label: 'Apple', value: 3 }]

@Component({})
export default class CreateOrEditRole extends Vue {

  // data
  data: CreateOrEditRoleData = {
    menus,
    roleInput: {
      menus: undefined,
      roleName: undefined,
      roleType: undefined,
      useable: undefined,
      remarks: undefined
    }
  }

  onChangeMenus() {

  }

  async save() {
    let result = await this.$http.createOrEditRole(this.data.roleInput);
    console.log(result);
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
