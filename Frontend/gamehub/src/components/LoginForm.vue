<template>
  <div class="login-form">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" v-model="username" required>
    <br><br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" v-model="password" required>
    <br><br>
    <button type="submit" @click="submitLogin">Login</button>
    <label id='remember-me'>
      <input type="checkbox" checked="checked" name="remember" v-model="isRemembered"> Remember me
    </label>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data () {
    return {
      username: '',
      password: '',
      isRemembered: false
    }
  },
  methods: {
    submitLogin(){
      console.log(this.username);
      console.log(this.password);
      console.log(this.isRemembered)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-form{
    width: 50%;
    margin: 0 auto;
  }

  .login-form > input{
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px black;
  }

  .login-form > button{
    background-color: black;
    color: white;
    border: none;
    width: 125px;
    height: 30px;
    float: left;
    margin-left: 210px;
  }

  .login-form > #remember-me{
    float: left;
    margin-left: 50px;
  }
</style>
