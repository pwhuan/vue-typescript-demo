<template>
  <div class="about">
    <h1>AboutaaAboutaaAboutaaAboutaaAboutaa</h1>
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
  onChange(event: Moment, dateString: string) {
  }
}
</script>


<style lang="less">
.about {
  display: block;
  position: relative;
}
</style>


