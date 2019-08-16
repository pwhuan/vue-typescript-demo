<template>
  <div class="about">
    <h1>关于列表</h1>
    <h1>AboutaaAboutaaAboutaaAboutaaAboutaa</h1>
    <router-link :to="'/about/abouta/aboutaa'">
      去详情
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Moment } from "moment";
@Component({})
export default class Aboutaa extends Vue {
  data() {
    return { defaultValue: this.$moment() };
  }
  onChange(event: Moment, dateString: string) {}
}
</script>


<style lang="less">
.about {
  display: block;
  position: relative;
  h1 {
    margin: 0;
  }
}
</style>


