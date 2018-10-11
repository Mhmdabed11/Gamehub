<template>
    <div >
        <div class="login">
            
                <label for="username">Username</label><br>
                <input type="text" v-model="username" name="username" placeholder="ex. Jon Doe" required> <br>
                <label for="password">Password</label><br>
                <input type="password" v-model="password" name="password" required>
                <button class="btnlogin" v-on:click='signin' type="submit">Log in </button>
                <p v-bind:class="{err:true, errshow:wrong}">Invalid Username or Password</p>
                <p>Don't have an account?</p>
                <button v-on:click="gotosignup">Register</button>
           
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      wrong: true
    };
  },
  methods: {
    gotosignup() {
      this.$router.push({ name: "signup" });
    },
    signin() {
      let ref = this;
      console.log(this.username, this.password);
      axios({
        method: "post",
        url: "http://localhost:8888/login",
        data: {
          username: this.username,
          password: this.password
        },
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(function(response) {
          if (response.status == 200) {
            ref.$store.commit("setusername", ref.username);
            ref.$router.push({ name: "checkers" });
          }
        })
        .catch(function(error) {
          ref.wrong = false;
        });
    }
  }
};
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}
.err {
  font-size: 10px;
  color: red;
}
.errshow {
  display: none;
}
.terms {
  font-size: 12px;
}
label {
  color: black;
  float: left;
  margin-left: 4%;
}
.login {
  background-color: rgb(239, 239, 239);
  width: 350px;
  height: 380px;
  margin-top: 10%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
}
input[type="text"],
select {
  width: 90%;
  margin-left: 4%;
  padding: 12px 20px;
  margin-top: 30px;
  display: block;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type="password"] {
  width: 90%;
  margin-left: 4%;
  padding: 12px 20px;
  margin-top: 20px;
  display: block;
  border-radius: 4px;
  box-sizing: border-box;
}

.btnlogin {
  width: 90%;
  background-color: #4caf50;
  color: white;
  display: block;
  padding: 12px 20px;
  margin-top: 30px;
  margin-left: 4%;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btnlogin:hover {
  background-color: #45a049;
}
</style>

