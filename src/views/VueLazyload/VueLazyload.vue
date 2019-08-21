<template>
  <div class="VueLazyload-wrap">
    <template v-for="img in HelloWorld.allGoodsList">
      <img :key="img.goods_code" v-lazy="img.icon_url">
    </template>

  </div>
</template>

<script lang="ts" src="./VueLazyload.ts"></script>

<style lang="less">
@import "./VueLazyload.less";
</style>

