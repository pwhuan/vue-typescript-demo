<template>
  <div class="home">
    {{count}}
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  data() {
    return {
      count: 1
    };
  }
  created() {}
}
</script>
