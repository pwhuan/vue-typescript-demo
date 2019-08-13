<template>
  <div class="hello">
    1111111111
  </div>
</template>


<script lang="ts">
// import { Component, Vue } from "vue-property-decorator";
// import { State } from "vuex-class";

// @Component
// export default class Breadcrumb extends Vue {
//   mounted() {
//     console.log(this.$route.name, this.$route.fullPath);
//   }
//   watch() {
//      console.log(this.$route.name, this.$route.fullPath);
//   }
//   getBreadcrumb() {
//     // let breadNumber = this.$route.query.breadNum || 1; //url变量breadNum记录层级，默认为1，如果大于1，要添加上变量；
//     // let breadLength = this.$store.state.breadListState.length; //目前breadlist集合数组个数
//     // let curName = this.$route.name;
//     // let curPath = this.$route.fullPath;
//     // let newBread = { name: curName, path: curPath };
//     // let ishome = curName === "首页";
//     // if (breadNumber === 1) {
//     //   //点击一级菜单
//     //   this.$store.commit("breadListStateRemove", 1); //初始化，只有首页面包屑按钮
//     //   if (!ishome)
//     //     //如果不是首页
//     //     this.$store.commit("breadListStateAdd", newBread); //当前页面添加到breadlist集合
//     // } else if (breadLength <= breadNumber) {
//     //   //如果不是一级导航，并且breadlist集合个数等于或者小于目前层级
//     //   this.$store.commit("breadListStateAdd", newBread); //要把当前路由添加到breadlist集合
//     // } else {
//     //   this.$store.commit("breadListStateRemove", +breadNumber + 1); //如果往回点面包屑导航，截取；
//     // }
//     // this.breadlist = this.$store.state.breadListState;
//     // console.log(this.breadlist);
//   }
// }
</script>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default Vue.extend({
  watch: {
    $route(to, from) {
      console.log(this.$route.meta.title, this.$route);
    }
  }
});
</script>

