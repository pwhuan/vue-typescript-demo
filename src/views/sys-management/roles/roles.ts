import { Component, Vue } from "vue-property-decorator"
import { Getter, Action } from "vuex-class"
import { RolesData } from '@/types/views/roles.interface.ts'
// import {  } from "@/components" // 组件

const columns = [{
  title: '角色名称',
  dataIndex: 'roleName',
  width: '20%',
}, {
  title: '角色类型',
  dataIndex: 'roleType',
  width: '20%',
}, {
  title: '备注',
  dataIndex: 'remarks',
}];


@Component({})
export default class Roles extends Vue {

  // data
  data: RolesData = {
    roles: [],
    columns,
    pagination: {},
    loading: false,
    getRolesInput: {
      size: 10,
      current: 1,

    }
  }

  addRole() {
    this.$router.push({
      path: '/sys-management/roles/CreateOrEditRole'
    })
  }

  created() {
    //
  }

  activated() {
    //
  }

  async mounted() {
    let result = await this.$store.dispatch('getRoles', this.data.getRolesInput);
    this.data.roles = result.data;
  }

  // 初始化函数
  init() {
    //
  }

}
