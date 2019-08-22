<template>
  <div class="login">

    <div class="login-content position-center-center">
      <h1>欢迎登录栗客后台</h1>
      <div class="input-content"><span>账号：</span><input v-model="loginInput.username" type="text"></div>
      <div class="input-content"><span>密码：</span><input v-model="loginInput.password" type="password"></div>
      <button class="login-btn" @click="login">登录</button>
    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { getToken, setToken } from "@/utils/common";
@Component({})
export default class Login extends Vue {
  loginInput = {
    username: null,
    password: null
  };
  async login() {
    if (!this.loginInput.username) {
      alert("请输入账户名");
      return;
    }
    if (!this.loginInput.password) {
      alert("请输入密码");
      return;
    }
    let loginAct = await this.$store.dispatch("loginAct", this.loginInput);
    console.log(loginAct)
    // loginAct.then((result: any) => {
    //   console.log(result);
    // });
  }
}
</script>


<style lang="less">
.login {
  .login-content {
    width: 400px;
    height: 300px;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0px 2px 8px 0px rgba(0, 20, 85, 0.12);
    h1 {
      font-size: 18px;
      color: #333;
      text-align: center;
      margin: 20px 0 10px 0;
    }
    .input-content {
      width: 90%;
      height: 32px;
      line-height: 32px;
      margin: 20px auto;
      display: flex;
      input {
        flex: 1;
        height: 32px;
        border: 1px solid #ccc;
      }
    }
    .login-btn {
      display: block;
      width: 60%;
      height: 32px;
      background: rgba(0, 0, 255, 0.5);
      border: 0;
      border-radius: 8px;
      margin: 0 auto;
      color: #fff;
      outline: none;
      padding: 0 10px;
    }
    .login-btn:hover {
      background: rgba(0, 0, 255, 0.7);
    }
  }
}
</style>


