<template>
  <div class="edit-permissions">
    <a-tree checkable @expand="onExpand" :expandedKeys="expandedKeys" :autoExpandParent="autoExpandParent" v-model="checkedKeys" @select="onSelect" :selectedKeys="selectedKeys" :treeData="treeData" />
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
import { Moment } from "moment";

const treeData = [
  {
    title: "0-0",
    key: "0-0",
    children: [
      {
        title: "0-0-0",
        key: "0-0-0",
        children: [
          { title: "0-0-0-0", key: "0-0-0-0" },
          { title: "0-0-0-1", key: "0-0-0-1" },
          { title: "0-0-0-2", key: "0-0-0-2" }
        ]
      },
      {
        title: "0-0-1",
        key: "0-0-1",
        children: [
          { title: "0-0-1-0", key: "0-0-1-0" },
          { title: "0-0-1-1", key: "0-0-1-1" },
          { title: "0-0-1-2", key: "0-0-1-2" }
        ]
      },
      {
        title: "0-0-2",
        key: "0-0-2"
      }
    ]
  },
  {
    title: "0-1",
    key: "0-1",
    children: [
      { title: "0-1-0-0", key: "0-1-0-0" },
      { title: "0-1-0-1", key: "0-1-0-1" },
      { title: "0-1-0-2", key: "0-1-0-2" }
    ]
  },
  {
    title: "0-2",
    key: "0-2"
  }
];
@Component({})
export default class EditPermissions extends Vue {
  expandedKeys = ["0-0-0", "0-0-1"];
  autoExpandParent = true;
  checkedKeys = ["0-0-0"];
  selectedKeys = [];
  treeData = treeData;

  @Watch("checkedKeys")
  checkedKeysChange(val: any) {
    console.log("onCheck", val);
  }
  onExpand(expandedKeys: any) {
    console.log("onExpand", expandedKeys);
    this.expandedKeys = expandedKeys;
    this.autoExpandParent = false;
  }
  onCheck(checkedKeys: any) {
    console.log("onCheck", checkedKeys);
    this.checkedKeys = checkedKeys;
  }
  onSelect(selectedKeys: any, info: any) {
    console.log("onSelect", info);
    this.selectedKeys = selectedKeys;
  }
}
</script>


<style lang="less">
</style>


