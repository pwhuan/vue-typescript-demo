<template>
  <div class="CreateOrEditRole-wrap">
    <div class="item">
      <div class="label"> 角色菜单：</div>
      <a-checkbox-group :options="data.menus" v-model="data.roleInput.menus" @change="onChangeMenus" />
    </div>
    <div class="item">
      <div class="label">角色名称：</div>
      <a-input v-model="data.roleInput.roleName" placeholder="角色名称" style="width: 200px" />
    </div>
    <div class="item">
      <div class="label">角色类型：</div>
      <a-select defaultValue="1" style="width: 200px" v-model="data.roleInput.roleType">
        <a-select-option value="1">大炮</a-select-option>
        <a-select-option value="2">坦克</a-select-option>
      </a-select>
    </div>
    <div class="item">
      <div class="label">是否可用：</div>
      <a-select defaultValue="true" style="width: 200px" v-model="data.roleInput.useable">
        <a-select-option value="true">是</a-select-option>
        <a-select-option value="flase">否</a-select-option>
      </a-select>
    </div>
    <div class="item">
      <div class="label"> 备注：</div>
      <a-input placeholder="备注：" style="width: 200px" v-model="data.roleInput.remarks" />
    </div>
    <div class="btn-content">
      <a-button type="primary" @click="save">保存</a-button>
    </div>
  </div>
</template>

<script lang="ts" src="./CreateOrEditRole.ts"></script>

<style lang="less">
@import "./CreateOrEditRole.less";
</style>

