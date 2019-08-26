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
import { MenuItems } from "@/router/SiderItem";
export default Vue.extend({
  data() {
    return {
      menuItems: [],
      defaultSelectedKeys: ["首页"],
      openKeys: ["首页"],
      permissions: ["home", "edit-permissions","roles"]
    };
  },
  mounted() {
    let menus = JSON.parse(JSON.stringify(MenuItems.menuItems));
    this.menuItems = this.filterMenusDisable(this.getMenus(menus));
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
    filterMenusDisable(menus: any) {
      let _subMenus = menus;
      _subMenus = _subMenus.filter(
        (f: any) => f.route != "" || f.items.length > 0
      );
      _subMenus.map((s: any) => {
        if (s.items.length > 0) {
          s.items = this.filterMenusDisable(s.items);
        }
      });
      return _subMenus;
    },
    filterMenus(menus: any) {
      // menus = menus.filter(
      //   (f: any) =>
      //     this.permissions.indexOf(f.permissionName) >= 0 || f.items.length > 0
      // );
      return menus;
    },
    getMenus(subMenus: any) {
      let _subMenus = this.filterMenus(subMenus);
      _subMenus.map((s: any) => {
        if (s.items.length > 0) {
          s.items = this.getMenus(s.items);
        }
      });
      return _subMenus;
    },
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





