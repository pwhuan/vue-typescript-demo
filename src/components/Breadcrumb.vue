<template>
  <div class="hello">
    当前位置：
    <a-breadcrumb separator=">" :routes="routers">
      <template slot="itemRender" slot-scope="{route, params, routes}">
        <span v-if="routes.indexOf(route) === routes.length - 1 || route.meta.isDisable">
          {{route.meta.title}}
        </span>
        <router-link v-else :to="route.path">
          {{route.meta.title}}
        </router-link>
      </template>
    </a-breadcrumb>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default Vue.extend({
  data() {
    return {
      routers: []
    };
  },
  watch: {
    $route(to, from) {
      this.routers = to.matched;
    }
  }
});
</script>
<style lang="less">
  .hello{
    display: flex;
  }
</style>

