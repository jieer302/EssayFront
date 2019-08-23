<template class="login_template">
  <div>
    <div  class="login_container" :style="bgHeight">
      <div class="login_form">
        <h2>Login In</h2>
        <el-input prefix-icon="el-icon-user"  class="login-input"  placeholder="请输入用户名" v-model="userName"></el-input>
        <el-input prefix-icon="el-icon-lock"  class="login-input"  placeholder="请输入密码" v-model="password" show-password></el-input>
        <el-button class="login_btn" @click="login" type="info" round>Login</el-button>
      </div>
    </div>
  </div>
</template>

<script>
  import { login } from '../axios/noteApi';
  export default {
    data() {
      return {
        userName: '',
        password: '',
        bgHeight: {
          height: ''
        }
      }
    },
    created () {
      if(JSON.parse( localStorage.getItem('user')) && JSON.parse( localStorage.getItem('user')).userName){
        this.userName = JSON.parse( localStorage.getItem('user')).userName;
        this.password = JSON.parse( localStorage.getItem('user')).password;
      }
    },
    mounted(){
      this.getHeight();
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
        login([this.username,this.password]).then(res => {
          console.log(res);
        if(res == 1){
          this.$router.push('/Home');
        }else{
          this.$message.error(res);
        }
      })

      },
     getHeight(){
       console.log(window.innerHeight);
        this.bgHeight.height = window.innerHeight + 'px';
       console.log(this.bgHeight);
      }
    }
  }
</script>
<style>
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin:0;
  font-size:16px;
  font-family: "Microsoft Yahei",Arial,Helvetica,sans-serif;
 /* background:url('../assets/images/bg.png') no-repeat;*/
}

.login_container{
  background:url('../assets/images/bg.png') no-repeat;
}

  .login_form {
    position: absolute;
    right: 10%;
    top:30%;
  }

 .login-input{
     width: 60%;
     margin-bottom: 3%;
 }

  .login_btn {
    width: 60%;
  }
</style>
