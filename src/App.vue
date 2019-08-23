<template>
  <div id="app">
    <a-spin :spinning="$store.state.loading" :tip="'努力加载中...'">
      <div class="container" v-if="$route.meta.hideMenu">
        <router-view />
      </div>

      <div class="container" v-if="!$route.meta.hideMenu">
        <div class="header">
          <Header></Header>
        </div>
        <div class="sider">
          <Sider></Sider>
        </div>

        <div class="router-view-breadcrumb">
          <Breadcrumb></Breadcrumb>
          <div class="router-view-content">
            <keep-alive>
              <router-view v-if="$route.meta.keepAlive" />
            </keep-alive>
            <router-view v-if="!$route.meta.keepAlive" />
          </div>
        </div>
      </div>
    </a-spin>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Sider from "@/components/Sider.vue";
import Breadcrumb from "@/components/Breadcrumb.vue";
import Header from "@/components/Header.vue";
@Component({
  components: {
    Sider,
    Breadcrumb,
    Header
  }
})
export default class Home extends Vue {
  
}
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
    .router-view-breadcrumb {
      flex: 1;
      padding: 5px 15px 15px 15px;
      box-sizing: border-box;
      min-height: calc(~"100vh - 70px");
      .router-view-content {
        margin-top: 5px;
        background: #fff;
        border-radius: 8px;
        box-shadow: 0px 2px 8px 0px rgba(0, 20, 85, 0.12);
      }
    } 
  }
}
</style>
