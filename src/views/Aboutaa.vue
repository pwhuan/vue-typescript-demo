<template>
  <div class="about">
    <h1>333333333333333333333333333333</h1>
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
  mounted() {
    let params = {
      pageNum: 1
    };
    this.$store.dispatch("getAllGoodsListAct", params);
  }
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


