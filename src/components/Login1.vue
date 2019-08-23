<template>
  <div>
    <div class="login_form">
      <img src="../assets/login/login_banner.png">
      <h2>欢迎来到申万宏源证券</h2>
      <el-input prefix-icon="el-icon-user" class="login-ic_user login-input"  placeholder="请输入用户名" v-model="userName"></el-input>
      <el-input prefix-icon="el-icon-search"  class="login-ic_password login-input"  placeholder="请输入密码" v-model="password"></el-input>
      <el-button class="login_btn" @click="login" type="primary" round :loading="isBtnLoading">登录</el-button>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        userName: '',
        password: '',
        isBtnLoading: false
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
    },
    computed: {
      btnText() {
        if (this.isBtnLoading) return '登录中...';
        return '登录';
      }
    },
    methods: {
      login() {
        if (!this.userName) {
          this.$message.error('请输入用户名');
          return;
        }
        if (!this.password) {
          this.$message.error('请输入密码');
          return;
        }

        this.$router.push('/Home');

      }
    }
  }
</script>
<style>
body {
  padding: 0;
  margin:0;
  font-size: 1rem;
  line-height: 1.5rem;
  font-family: "Microsoft Yahei",Arial,Helvetica,sans-serif;
  text-rendering: optimizeLegibility;
}

  .login_form {

    padding-bottom: 10%;
    position: relative;

  }

  .login_form img {
      display: block;
      width: 100%;
      margin-bottom:5%;
  }

 .login_form h2 {
     width: 100%;
     line-height: 2rem;
     text-align: center;
     font-size: 1.2rem;
     font-weight: bold;
     color: #fff;
     position: absolute;
     top: 16%;
     left: 0;
     z-index: 50;
 }

 .login-input{
   height: 2.5rem;
   width: 90%;
   margin-bottom: 0.44rem;
   padding-left: 10%;
   border: 0;
   border-bottom: solid 1px lavender;
 }

  .login_btn {
    width: 80%;

    background: #2579D4;

  }
</style>
