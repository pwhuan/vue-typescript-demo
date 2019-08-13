<template>
  <div class="Sider">
    <a-menu @click="handleClick" style="width: 256px" :defaultSelectedKeys="['1']" :openKeys.sync="openKeys" mode="inline">
      <template v-for="item in menuItems">
        <a-menu-item :key="item.name" v-if="item.items.length == 0">
            <!-- 一级菜单 -->
          <a-icon type="appstore" /><span>{{item.name}}</span></a-menu-item>
        <a-sub-menu :key="item.name" @titleClick="titleClick" v-if="item.items.length > 0">
            <!-- 二级菜单 -->
          <span slot="title">
            <a-icon type="appstore" /><span>{{item.name}}</span></span>
          <template v-for="subItem in item.items">
            <a-menu-item :key="subItem.name" v-if="subItem.items.length == 0">{{subItem.name}}</a-menu-item>
            <a-sub-menu :key="subItem.name" @titleClick="titleClick" v-if="subItem.items.length > 0">
                <!-- 三级菜单 -->
              <span slot="title">
                <a-icon type="appstore" /><span>{{item.name}}</span></span>
              <template v-for="samllItem in subItem.items">
                <a-menu-item :key="samllItem.name">{{samllItem.name}}</a-menu-item>
              </template>
            </a-sub-menu>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { MenuItems } from "@/utils/SiderItem";
@Component({})
export default class Sider extends Vue {
  menuItems = MenuItems.menuItems;
  openKeys = ["sub2", "sub3"];
  current = ["mail"];

  mounted() {
    console.log(this.menuItems);
  }
  handleClick(e: any) {
    console.log("click", e);
  }
  titleClick(e: any) {
    console.log("titleClick", e);
  }
}
</script>

<style lang="less">
.Sider {
  width: 260px !important;
}
</style>





