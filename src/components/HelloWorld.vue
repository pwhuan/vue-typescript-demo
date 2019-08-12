<template>
  <div class="hello">
    <!-- {{count}} -->
    <div>state:{{HelloWorld.count}} -------</div>
    <div>getters:{{this.$store.getters.getCount}}</div>
    <button @click="addFun">+</button>
    <button @click="reductionFun">-</button>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { State } from "vuex-class";
import { MenuItems } from "@/utils/SiderItem";

@Component
export default class HelloWorld extends Vue {
  @State HelloWorld: any;
  mounted() {
    let params = {
      pageNum: 1
    };
    console.log(MenuItems.menuItems);
    this.$store.dispatch("getAllGoodsListAct", params);
  }
  addFun() {
    this.$store.dispatch("addFun");
  }
  reductionFun() {
    this.$store.dispatch("reductionFun");
  }
}
</script>



