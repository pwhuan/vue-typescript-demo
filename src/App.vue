<template>
  <div id="app">
    <div class="container">
      <div class="header"></div>
      <div class="sider">
        <Sider></Sider>
      </div>
      <div class="content">
        <router-view />
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sider from "@/components/Sider.vue"; // @ is an alias to /src
@Component({
  components: {
    Sider
  }
})
export default class Home extends Vue {}
</script>
<style lang="less">
#app {
  width: 100%;
  height: 100%;
  background: #f1f1f1;
  .container {
    display: flex;
    flex-wrap: wrap;
    .header {
      height: 70px;
      width: 100%;
      background: #fff;
      box-shadow: 0px 2px 8px 0px rgba(0, 20, 85, 0.12);
    }
    .sider {
      background: #fff;
      width: 256px;
      min-width: 256px;
      max-width: 256px;
      min-height: calc(~"100vh - 70px");
      box-shadow: 0px 2px 8px 0px rgba(0, 20, 85, 0.12);
    }
    .content {
      flex: 1;
      margin: 15px;
      background: #fff;
      border-radius: 8px;
      box-shadow: 0px 2px 8px 0px rgba(0, 20, 85, 0.12);
    }
  }
}
</style>
