<template>
  <div class="Sider">
    <a-menu @click="handleClick" style="width: 256px" :selectedKeys="defaultSelectedKeys" :openKeys.sync="openKeys" mode="inline">
      <template v-for="item in menuItems">
        <a-menu-item :key="item.name" :value="item.route" v-if="item.items.length == 0">
          <!-- 一级菜单 -->
          <a-icon type="appstore" /><span>{{item.name}}</span></a-menu-item>
        <a-sub-menu :key="item.name" :value="item.route" @titleClick="titleClick" v-if="item.items.length > 0">
          <!-- 二级菜单 -->
          <span slot="title">
            <a-icon type="appstore" /><span>{{item.name}}</span></span>
          <template v-for="subItem in item.items">
            <a-menu-item :key="subItem.name" :value="subItem.route" v-if="subItem.items.length == 0">{{subItem.name}}</a-menu-item>
            <a-sub-menu :key="subItem.name" :value="subItem.route" @titleClick="titleClick" v-if="subItem.items.length > 0">
              <!-- 三级菜单 -->
              <span slot="title">
                <a-icon type="appstore" /><span>{{item.name}}</span></span>
              <template v-for="samllItem in subItem.items">
                <a-menu-item :key="samllItem.name" :value="samllItem.route">{{samllItem.name}}</a-menu-item>
              </template>
            </a-sub-menu>
          </template>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>


<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { MenuItems } from "@/utils/SiderItem";
export default Vue.extend({
  data() {
    return {
      menuItems: MenuItems.menuItems,
      defaultSelectedKeys: ["首页"],
      openKeys: ["首页"]
    };
  },
  mounted() {
    this.openKeys = [];
  },
  watch: {
    $route(to, from) {
      this.defaultSelectedKeys = [];
      to.matched.map((s: any) => {
        if (this.openKeys.indexOf(s.meta.title) < 0) {
          this.openKeys.push(s.meta.title);
        }
        let select = s.meta.select ? s.meta.select : s.meta.title;
        this.defaultSelectedKeys.push(select);
      });
    }
  },
  methods: {
    handleClick(e: any) {
      if (e.item.value && e.item.value !== this.$route.path) {
        this.$router.push({
          path: e.item.value
        });
      }
    },
    titleClick(e: any) {}
  }
});
</script>

<style lang="less">
.Sider {
  width: 260px !important;
}
</style>





