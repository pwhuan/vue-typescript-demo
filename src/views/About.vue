<template>
  <div class="about">
    <h1>vue.ant.design Dome</h1>

      <a-time-picker use12Hours @change="onChange" />
       <a-month-picker @change="onChange" placeholder="Select month" />
    <a-date-picker  key="en" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
export default class About extends Vue {
  onChange() {}
}
</script>

