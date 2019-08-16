<template>
  <div class="hello">
    当前位置：
    <a-breadcrumb separator=">" :routes="routers">
      <template slot="itemRender" slot-scope="{route, params, routes}">
        <span v-if="routes.indexOf(route) === routes.length - 1 || route.isDisable">
          {{route.name}}
        </span>
        <router-link v-else :to="route.path">
          {{route.name}}
        </router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import routes from "@/router/router.ts";
import { Breadcrumb } from "@/router/breadcrumb";
export default Vue.extend({
  data() {
    return {
      routers: [{}]
    };
  },
  watch: {
    $route(to, from) {
      let path = to.path.split("/");
      this.routers = [];
      let str = "";
      path.map((p: any) => {
        str += p && p.length > 0 ? `/${p}` : str;
        Breadcrumb.breadcrumb.map(s => {
          if (str === s.path) {
            this.routers.push(s);
          }
        });
      });

    }
  }
});
</script>
<style lang="less">
.hello {
  display: flex;
}
</style>



