<template>
  <div class="roles-wrap">
    <a-button type="primary" @click="addRole">添加角色</a-button>
    <a-table :columns="data.columns" :dataSource="data.roles.records" :rowKey="'id'" :pagination="data.pagination" :loading="data.loading">
    </a-table>
  </div>
</template>

<script lang="ts" src="./roles.ts"></script>

<style lang="less">
@import "./roles.less";
</style>

