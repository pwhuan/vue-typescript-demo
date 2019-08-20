yarn <template>
  <div class="about">
    <!-- <h1>vue.ant.design Dome</h1>
    <a-date-picker @change="onChange" :defaultValue="defaultValue" /> -->
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Moment } from "moment";
@Component({})
export default class Permissions extends Vue {
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
}
</style>


