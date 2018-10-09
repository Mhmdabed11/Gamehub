<template>
  <div class="signup-form">
    <label for="uname"><b>Username</b></label>
    <input type="text" placeholder="Enter Username" name="uname" v-model="username" required>
    <br><br>
    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" v-model="password" required>
    <br><br>
    <button type="submit" @click="submitSignup">Signup</button>
    <span id='login-link'> Already have an account? <a @click="redirectLogin">Log in.</a></span>
  </div>
</template>

<script>
export default {
  name: 'SignupForm',
  data () {
    return {
      username: '',
      password: '',
      isRemembered: false
    }
  },
  methods: {
    submitSignup(){
      console.log(this.username);
      console.log(this.password);
      console.log(this.isRemembered)
    },
    redirectLogin(){
      this.$router.push({
        name: 'LoginForm',
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .signup-form{
    width: 50%;
    margin: 0 auto;
  }

  .signup-form > input{
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: solid 1px black;
  }

  .signup-form > button{
    background-color: black;
    color: white;
    border: none;
    width: 125px;
    height: 30px;
    float: left;
    margin-left: 210px;
  }

  #login-link{
      float: left;
      font-size: 12px;
      margin-left: 10px;
      margin-top: 16px;
  }

  #login-link > a {
      color: blue;
  }

</style>
