<template>
  <div class="Sider">
    <button @click="logout">退出</button>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { MenuItems } from "@/router/SiderItem";
import * as apiMain from "@/api/apiMain";

export default Vue.extend({
  data() {
    return {};
  },
  mounted() {},
  methods: {
    async logout() {
    }
  }
});
</script>

<style lang="less">
.Sider {
  width: 260px !important;
}
</style>





