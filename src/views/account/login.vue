<template>
  <div class="about">
    <h1>login</h1>
    <button @click="setToken"></button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getToken, setToken } from "@/utils/common";
@Component({})
export default class Login extends Vue {
  data() {
    return {};
  }
  setToken() {
    setToken("1");
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


